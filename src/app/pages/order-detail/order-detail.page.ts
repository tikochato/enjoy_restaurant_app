import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController, ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { SelectDriversPage } from '../select-drivers/select-drivers.page';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})

export class OrderDetailPage implements OnInit {
  tab_id;
  id: any;
  grandTotal: any;
  orders: any[] = [];
  serviceTax: any;
  deliveryCharge: any;
  status: any;
  time: any;
  total: any;
  uid: any;
  address: any;
  restName: any;
  userName: any;
  userEmail: any;
  userPic: any;
  phone: any;
  token: any;
  deliveryAddress: any;
  changeStatusOrder: any;
  drivers: any[] = [];
  dummyDriver: any[] = [];
  userLat: any;
  userLng: any;
  paid: any;
  orderString: any[] = [];
  loaded: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private printer: Printer,
    private modalController: ModalController) {
    this.loaded = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.id = data.id;
      console.log('thisidd', this.id);
      this.getOrder();
    });
  }

  back() {
    this.util.publishNewAddress('hello');
    this.navCtrl.back();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SelectDriversPage,
      backdropDismiss: false,
      showBackdrop: true,
      componentProps: {
        item: this.dummyDriver
      }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data && data.role === 'selected') {
        this.drivers = data.data;
        if (this.drivers && this.drivers.length) {
          this.placeOrder();
        }
      }
    });
    await modal.present();
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  placeOrder() {
    const param = {
      driverId: this.drivers[0].uid,
      dId: this.drivers[0].uid,
      status: 'accepted'
    };
    const value = 'accepted';
    this.util.show(this.util.translate('Please wait'));
    this.api.updateOrder(this.id, param).then((data) => {
      const parm = {
        current: 'busy',
      };
      this.api.updateProfile(this.drivers[0].uid, parm).then((data) => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
      if (this.drivers[0] && this.drivers[0].fcm_token !== '') {
        this.api.sendNotification(this.util.translate('New Order Received '),
          this.util.translate('New Order'), this.drivers[0].fcm_token).subscribe((data) => {
            console.log('send notifications', data);
          }, error => {
            console.log(error);
          });
      }
      console.log('data', data);
      const msg = this.util.translate('Your Order is ') + this.util.translate(value) + this.util.translate(' By ') + this.restName;
      const titleNotification = this.util.translate('Order ') + this.util.translate(value);
      this.api.sendNotification(msg, titleNotification, this.token).subscribe((data) => {
        console.log(data);
        this.util.hide();
        this.navCtrl.back();
      }, error => {
        this.util.hide();
        console.log('err', error);
      });
      this.util.publishNewAddress('hello');
      Swal.fire({
        title: this.util.translate('success'),
        text: this.util.translate('Order status changed to ') + this.util.translate(value),
        icon: 'success',
        timer: 2000,
        backdrop: false,
        background: 'white'
      });
      this.navCtrl.back();
    }).catch(error => {
      console.log(error);
      this.util.hide();
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    console.log(lat1, lon1, lat2, lon2);
    const earthRadiusKm = 6371;
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  getDrivers() {
    this.api.getDrivers().then((data) => {
      console.log('drivers', data);
      this.dummyDriver = [];
      this.drivers = [];
      if (data && data.length > 0) {
        data.forEach(async (element) => {
          const distance = await this.distanceInKmBetweenEarthCoordinates(
            this.userLat,
            this.userLng,
            parseFloat(element.lat),
            parseFloat(element.lng));
          console.log(distance);
          if (element.current === 'active' && element.status === 'active') {
            element.distance = distance ? distance : 10;
            this.dummyDriver.push(element);
          }
        });
        data.forEach(async (element) => {
          const distance = await this.distanceInKmBetweenEarthCoordinates(
            this.userLat,
            this.userLng,
            parseFloat(element.lat),
            parseFloat(element.lng));
          if (distance < 10 && element.current === 'active' && element.status === 'active') {
            this.drivers.push(element);
          }
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  getOrder() {
    this.api.getOrderById(this.id).then((data) => {
      this.loaded = true;
      console.log(data);
      if (data) {
        this.grandTotal = data.grandTotal;
        this.orders = JSON.parse(data.order);
        this.serviceTax = data.serviceTax;
        this.deliveryCharge = data.deliveryCharge;
        this.status = data.status;
        this.time = data.time;
        this.total = data.total;
        this.address = data.vid.address;
        this.restName = data.vid.name;
        this.deliveryAddress = data.address.address;
        if (data && data.vid && data.vid.lat) {
          this.userLat = data.vid.lat;
          this.userLng = data.vid.lng;
        }
        this.userName = data.uid.fullname;
        this.phone = data.uid.phone;
        this.token = data.uid.fcm_token;
        this.userEmail = data.uid.email;
        this.paid = data.paid;
        this.userPic = data.uid && data.uid.cover ? data.uid.cover : 'assets/imgs/user.jpg';
        console.log('this', this.orders);
        this.getDrivers();
        this.orders.forEach(element => {
          this.orderString.push('<p style="border-bottom: 1px dashed black;"><span style="float: left;">' + element.name + ' X ' + element.quantiy + ' </span> <span style="float: right;">' + this.util.translate('currencyCode') + element.price + '</span> </p>')
        });
        console.log('orderstring', this.orderString);
      }
    }, error => {
      this.loaded = true;
      this.util.errorToast(this.util.translate('Something went wrong'));
      console.log('error in orders', error);
    }).catch(error => {
      this.loaded = true;
      this.util.errorToast(this.util.translate('Something went wrong'));
      console.log('error in order', error);
    });
  }

  goToTracker() {
    const navData: NavigationExtras = {
      queryParams: {
        id: this.id
      }
    };
    this.router.navigate(['/tracker'], navData);
  }

  changeStatus(value) {
    this.util.show(this.util.translate('Please wait'));
    this.api.updateOrderStatus(this.id, value).then((data) => {

      console.log('data', data);
      const msg = this.util.translate('Your Order is ') + this.util.translate(value) + this.util.translate(' By ') + this.restName;
      this.api.sendNotification(msg, 'Order ' + this.util.translate(value), this.token).subscribe((data) => {
        console.log(data);
        this.util.hide();
        this.navCtrl.back();
      }, error => {
        this.util.hide();
        console.log('err', error);
      });
      this.util.publishNewAddress('hello');
      Swal.fire({
        title: this.util.translate('success'),
        text: this.util.translate('Order status changed to ') + this.util.translate(value),
        icon: 'success',
        timer: 2000,
        backdrop: false,
        background: 'white'
      });
      this.navCtrl.back();
    }).catch(error => {
      console.log(error);
      this.util.hide();
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  changeOrderStatus() {
    console.log('order status', this.changeStatusOrder);
    if (this.changeStatusOrder) {
      this.changeStatus(this.changeStatusOrder);
    }
  }

  call() {
    if (this.phone) {
      window.open('tel:' + this.phone);
    } else {
      this.util.errorToast(this.util.translate('Number not found'));
    }
  }
  
  email() {
    if (this.userEmail) {
      window.open('mailto:' + this.userEmail);
    } else {
      this.util.errorToast(this.util.translate('Email not found'));
    }
  }

  printOrder() {
    const title = `Enjoy ${this.util.translate('Order Summary')}`;
    const userName = this.userName || '';
    const options: PrintOptions = {
      name: title,
      duplex: false,
    };
    const order = this.orderString.join('');
    const content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">' + title + '</h2> <p style="float: left;"><b>' + this.id + '</b></p> <p style="float: left;"><b>' + this.restName + '</b></p> <p style="float: left;"><b>' + userName + '</b></p> <p style="float: left;">' + this.time + ' </p> <p style="font-weight: bold;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">' + this.util.translate('currencyCode') + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">' + this.util.translate('currencyCode') + this.deliveryCharge + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">' + this.util.translate('currencyCode') + this.grandTotal + '</span> </p> <h1 style="text-align: center;">' + this.util.translate(this.paid.toUpperCase()) + '</h1> </div>';
    this.printer.print(content, options).then((data) => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }
}
