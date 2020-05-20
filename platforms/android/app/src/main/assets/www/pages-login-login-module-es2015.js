(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"enjoy\">\n    <p class=\"login-name\">{{'Login' | translate}}</p>\n    <p class=\"subTitle\">{{'Enter your login detail to' | translate}} <br>\n      {{'access your account' | translate}}</p>\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Email' | translate )\" name=\"email\" #email=\"ngModel\"\n          spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('Password' | translate )\" type=\"password\"\n          #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Password is required' | translate}}\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">{{'Forgot Password?' | translate}}</p>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{'Log In' | translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n  <div class=\"btns\">\n    <img src=\"assets/imgs/en.png\" (click)=\"changeLng('en')\"\n      [ngClass]=\"getClassName() == 'en' ? 'flagActive':'flagDeactive'\" alt=\"\">\n    <img src=\"assets/imgs/spanish.png\" (click)=\"changeLng('spanish')\"\n      [ngClass]=\"getClassName() == 'spanish' ? 'flagActive':'flagDeactive'\" alt=\"\">\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ00sa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBQ0ksdUJBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVo7QURDSTtFQUNRLGlCQUFBO0VBQ0EsK0JBQUE7QUNFWjtBREFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNHUjtBRERJO0VBQ0ssZ0JBQUE7QUNJVDtBREZJO0VBQ0ksZ0JBQUE7QUNLUjtBREhJO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDTVI7QURKSTtFQUNLLDhCQUFBO0VBQ0QsNkJBQUE7RUFDQSxnQkFBQTtBQ09SO0FESEc7RUFDSyxrQkFBQTtBQ01SO0FETE87RUFDSywrQkFBQTtFQUVBLGlCQUFBO0FDTVo7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ01KO0FETEk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ09SO0FETEk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ09SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubG9naW4tbG9nbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLmxvZ29faWNvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbi1uYW1le1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGl0bGV7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZnJnVGFne1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28gaW1nIHtcbiAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAuY3JlYXRlQWNje1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgIC5yZWdpc3RlclRhZ3tcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgIH1cbiAgIH0gXG4uYnRuc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAuZmxhZ0FjdGl2ZXtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIC5mbGFnRGVhY3RpdmV7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbn0iLCIubG9naW4tbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dvX2ljb24ge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dpbi1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmxvZ2luLWxvZ28gLnN1YlRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZyZ1RhZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYnRuX2NsYXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY3JlYXRlQWNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNyZWF0ZUFjYyAucmVnaXN0ZXJUYWcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4uYnRucyAuZmxhZ0FjdGl2ZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuLmJ0bnMgLmZsYWdEZWFjdGl2ZSB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");









let LoginPage = class LoginPage {
    constructor(router, api, util, navCtrl, translate, oneSignal) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.isLogin = false;
        this.oneSignal.getIds().then((data) => {
            console.log('iddddd', data);
            localStorage.setItem('fcm', data.userId);
        });
    }
    ngOnInit() {
    }
    onLogin(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
            }
            console.log('login');
            this.isLogin = true;
            this.api.login(this.login.email, this.login.password).then((userData) => {
                console.log(userData);
                if (userData && userData.uid) {
                    this.api.getProfile(userData.uid).then(data => {
                        console.log('data', data);
                        this.isLogin = false;
                        if (data && data.type === 'venue') {
                            if (data && data.status === 'active') {
                                localStorage.setItem('uid', userData.uid);
                                localStorage.setItem('help', userData.uid);
                                this.navCtrl.navigateRoot(['/']);
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                                    title: this.util.translate('Error'),
                                    text: this.util.translate('Your are blocked please contact administrator'),
                                    icon: 'error',
                                    showConfirmButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: this.util.translate('Need Help?'),
                                    backdrop: false,
                                    background: 'white'
                                }).then(data => {
                                    if (data && data.value) {
                                        localStorage.setItem('help', userData.uid);
                                        this.router.navigate(['inbox']);
                                    }
                                });
                                // this.util.errorToast('Your are blocked please contact administrator');
                            }
                        }
                        else {
                            this.util.showToast(this.util.translate('your not valid user'), 'danger', 'bottom');
                        }
                    }).catch(error => {
                        this.isLogin = false;
                        console.log(error);
                        this.util.showToast(`${error}`, 'danger', 'bottom');
                    });
                }
            }).catch(err => {
                this.isLogin = false;
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }
    }
    resetPass() {
        this.router.navigate(['reset']);
    }
    register() {
        this.router.navigate(['register']);
    }
    getClassName() {
        return localStorage.getItem('language');
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.translate.use(lng);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map