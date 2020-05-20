import { Component, OnInit } from '@angular/core';
import { forgot } from 'src/app/interfaces/forgot';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  login: forgot = { email: '' };
  submitted = false;
  constructor(
    private navCtrl: NavController,
    private util: UtilService,
    private api: ApisService
  ) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailfilter.test(this.login.email)) {
        this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
        return false;
      }
      this.util.show();
      this.api.resetPassword(this.login.email).then((data) => {
        this.util.hide();
        this.util.showToast(this.util.translate('Reset Password link is sent to your email'), 'dark', 'bottom');
        console.log('sent', data);
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
