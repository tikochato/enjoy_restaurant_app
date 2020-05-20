import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-new-foods',
  templateUrl: './add-new-foods.page.html',
  styleUrls: ['./add-new-foods.page.scss'],
})
export class AddNewFoodsPage implements OnInit {
  categories: any[] = [];
  name: any;
  cid: any;
  price: any;
  descriptions: any;
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  image: any = '';
  db = firebase.firestore();
  coverImage: any;
  isEdit: boolean = false;
  ratting: any;
  id: any;
  veg: boolean = true;
  status: boolean;
  variation: boolean = false;
  smallPrice: any;
  mediumPrice: any;
  largePrice: any;
  constructor(
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private util: UtilService,
    private api: ApisService,
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) {
    this.variation = false;
  }
  addNew() {
    this.router.navigate(['category']);
  }

  ionViewWillEnter() {
    this.category();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('data=>', data);
      if (data.hasOwnProperty('id')) {
        this.isEdit = true;
        this.api.getFoodWithId(localStorage.getItem('uid'), data.id).then((info) => {
          console.log(info);
          if (info) {
            this.cid = info.cid.id;
            this.name = info.name;
            this.coverImage = info.cover;
            this.price = info.price;
            this.descriptions = info.desc;
            this.ratting = info.ratting;
            this.id = info.id;
            this.veg = info.veg;
            this.status = info.status ? info.status : true;
            this.variation = info.variation;
            if (info && info.variation) {
              this.smallPrice = info.small;
              this.mediumPrice = info.medium;
              this.largePrice = info.large;
              this.variation = true;
            } else {
              this.variation = false;
            }
          }
        }, error => {
          console.log(error);
          this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
          console.log(error);
          this.util.errorToast(this.util.translate('Something went wrong'));
        });
      }
    });
  }

  category() {
    this.api.getVenueCategories(localStorage.getItem('uid')).then((data) => {
      console.log(data);
      if (data) {
        this.categories = data;
      }
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }
  async cover() {
    const actionSheet = await this.actionSheetController.create({
      header: this.util.translate('Choose from'),
      buttons: [{
        text: this.util.translate('Camera'),
        icon: 'camera',
        handler: () => {
          console.log('Delete clicked');
          this.opemCamera('camera');
        }
      }, {
        text: this.util.translate('Gallery'),
        icon: 'image',
        handler: () => {
          console.log('Share clicked');
          this.opemCamera('gallery');
        }
      }, {
        text: this.util.translate('Cancel'),
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  opemCamera(type) {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 700,
      targetWidth: 700,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type === 'camera' ? 1 : 0
    };
    console.log('open');
    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
      this.util.show();
      const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(base64Image, 'data_url').then((snapshot) => {
          this.util.hide();
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('url uploaded', url);
            this.coverImage = url;
          });
        }, error => {
          this.util.hide();
          console.log(error);
          this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch((error) => {
          console.log(error);
          this.util.hide();
          this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }, (err) => {
      this.util.hide();
    });
  }

  submit() {
    if (this.name === '' || !this.name || this.cid === '' ||
      !this.cid || this.price === '' || !this.price || this.descriptions === '' || !this.descriptions) {
      this.util.errorToast(this.util.translate('All Fields are required'));
      return false;
    }
    if (!this.coverImage || this.coverImage === '') {
      this.util.errorToast(this.util.translate('Please add your cover image'));
      return false;
    }
    this.util.show();
    if (this.isEdit) {
      console.log(this.cid);
      const parma = {
        uid: localStorage.getItem('uid'),
        id: this.id,
        cid: this.db.collection('categories').doc(this.cid),
        name: this.name,
        price: this.price,
        desc: this.descriptions,
        cover: this.coverImage,
        veg: this.veg,
        status: this.status,
        variation: this.variation
      };
      if (this.variation) {
        parma['small'] = this.smallPrice;
        parma['medium'] = this.mediumPrice;
        parma['large'] = this.largePrice;
      }
      this.api.updateFood(parma.uid, this.id, parma).then((data) => {
        this.util.hide();
        this.util.showToast(this.util.translate('Food updated Successfully'), 'success', 'bottom');
        this.navCtrl.back();
      }, error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
      }).catch(error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
      });
    } else {
      console.log(this.cid);
      const id = this.util.makeid(10);
      const param = {
        uid: localStorage.getItem('uid'),
        cid: this.db.collection('categories').doc(this.cid),
        name: this.name,
        price: this.price,
        desc: this.descriptions,
        cover: this.coverImage,
        ratting: 0,
        veg: this.veg,
        status: true,
        variation: this.variation
      };
      if (this.variation) {
        param['small'] = this.smallPrice;
        param['medium'] = this.mediumPrice;
        param['large'] = this.largePrice;
      }
      this.api.addFood(localStorage.getItem('uid'), id, param).then((data) => {
        this.util.hide();
        this.util.showToast(this.util.translate('Food Added Successfully'), 'success', 'bottom');
        const updateParam = {
          uid: localStorage.getItem('uid'),
          isClose: false
        };
        this.api.updateVenue(updateParam).then(data => {
          console.log(data);
        }).catch(error => {
          console.log(error);
        });
        this.navCtrl.back();
      }, error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
      }).catch(error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
      });
    }

  }
}
