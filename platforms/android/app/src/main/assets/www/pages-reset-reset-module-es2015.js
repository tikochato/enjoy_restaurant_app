(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-reset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Forgot Password?' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"yoga\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate )\" name=\"email\" #email=\"ngModel\" spellcheck=\"false\"\n          autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\n        <ion-col class=\"ion-no-margin ion-no-padding\">\n          <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\n            {{'Send Link' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reset/reset-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/reset/reset-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function() { return ResetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.page */ "./src/app/pages/reset/reset.page.ts");




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
    }
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reset/reset.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.module.ts ***!
  \*********************************************/
/*! exports provided: ResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-routing.module */ "./src/app/pages/reset/reset-routing.module.ts");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset.page */ "./src/app/pages/reset/reset.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let ResetPageModule = class ResetPageModule {
};
ResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]
        ],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
    })
], ResetPageModule);



/***/ }),

/***/ "./src/app/pages/reset/reset.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzZXQvcmVzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ00sa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBQ0ksdUJBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVo7QURDSTtFQUNRLGlCQUFBO0VBQ0EsK0JBQUE7QUNFWjtBREFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNHUjtBRERJO0VBQ0ssZ0JBQUE7QUNJVDtBREZJO0VBQ0ksZ0JBQUE7QUNLUjtBREhJO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDTVI7QURKSTtFQUNLLDhCQUFBO0VBQ0QsNkJBQUE7RUFDQSxnQkFBQTtBQ09SO0FESEc7RUFDSSxrQkFBQTtBQ01QO0FETE87RUFDSywrQkFBQTtFQUNBLGlCQUFBO0FDT1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNldC9yZXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAubG9nb19pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLW5hbWV7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJUaXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mcmdUYWd7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmJ0bl9jbGFzc3tcbiAgICAgICAgY29sb3I6IHdoaXRlIDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAubG9naW4tbG9nbyBpbWcge1xuICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgXG4gICAgfVxuICBcbiAgIC5jcmVhdGVBY2N7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgIC5yZWdpc3RlclRhZ3tcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgfVxuICAgfSAiLCIubG9naW4tbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dvX2ljb24ge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1sb2dvIC5sb2dpbi1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmxvZ2luLWxvZ28gLnN1YlRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZyZ1RhZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYnRuX2NsYXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY3JlYXRlQWNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNyZWF0ZUFjYyAucmVnaXN0ZXJUYWcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reset/reset.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/reset/reset.page.ts ***!
  \*******************************************/
/*! exports provided: ResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPage", function() { return ResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let ResetPage = class ResetPage {
    constructor(navCtrl, util, api) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.login = { email: '' };
        this.submitted = false;
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
};
ResetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
ResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.page.scss */ "./src/app/pages/reset/reset.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], ResetPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-reset-module-es2015.js.map