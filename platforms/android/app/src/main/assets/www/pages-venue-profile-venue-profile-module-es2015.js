(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venue-profile-venue-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-profile/venue-profile.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-profile/venue-profile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Venue Profile' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <p class=\"lbl\">{{'Restaurant Name' | translate}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Enter your restaurant name\"></ion-input>\n    <p class=\"lbl\">{{'Restaurant Locations' | translate}}</p>\n    <ion-searchbar class=\"ion-no-padding\" mode=\"ios\" [(ngModel)]=\"address\" (ionInput)=\"updateSearch()\"\n      (click)=\"openMap()\" (ionCancel)=\"dismiss()\">\n    </ion-searchbar>\n    <p class=\"lbl\">{{'Per Person Dish' |translate}} {{'currencyCode' | translate}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"dishPrice\" type=\"number\" placeholder=\"{{'currencyCode' | translate}}\"></ion-input>\n\n    <p class=\"lbl\">{{'E-mail ID' | translate}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"email\" type=\"email\" placeholder=\"email\"></ion-input>\n\n    <p class=\"lbl\">{{'Phone' | translate}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"phone\" type=\"number\" placeholder=\"Phone Number\"></ion-input>\n\n    <p class=\"lbl\">{{'Opening Time' | translate}}</p>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-datetime [(ngModel)]=\"openTime\" display-format=\"hh:mm A\" placeholder=\"Selecte time\"></ion-datetime>\n    </ion-item>\n\n    <p class=\"lbl\">{{'Closing Time' | translate}}</p>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-datetime [(ngModel)]=\"closeTime\" display-format=\"hh:mm A\" placeholder=\"Selecte time\"></ion-datetime>\n    </ion-item>\n\n\n    <p class=\"lbl\">{{'Estimated Delivery time' | translate}}</p>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-datetime [(ngModel)]=\"time\" display-format=\"mm\" placeholder=\"Selecte time\"></ion-datetime>\n    </ion-item>\n\n    <p class=\"lbl\">{{'Restaurant Description' | translate}}</p>\n    <ion-textarea class=\"inputText\" [(ngModel)]=\"descritions\" rows=\"5\" placeholder=\"Enter your restaurant description\">\n    </ion-textarea>\n    <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n      <ion-label>{{'Select Cuisine' | translate}}</ion-label>\n      <!-- <p class=\"lbl\">Select Cuisine</p> -->\n      <ion-select [(ngModel)]=\"cusine\" multiple=\"true\">\n        <ion-select-option value=\"Italian\">Italian</ion-select-option>\n        <ion-select-option value=\"Mexican\">Mexican</ion-select-option>\n        <ion-select-option value=\"Chinese\">Chinese</ion-select-option>\n        <ion-select-option value=\"Indian\">Indian</ion-select-option>\n        <ion-select-option value=\"Japanese\">Japanese</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <p class=\"lbl\">{{'Upload Your Restaurant Cover Image' | translate}}</p>\n    <div class=\"coverPlaceholder\" (click)=\"cover()\" *ngIf=\"!coverImage || coverImage ==''\">\n      <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n      <p>{{'Upload your' | translate}} <br> {{'cover image here' | translate}}</p>\n    </div>\n    <div class=\"coverReal\" (click)=\"cover()\" [style.backgroundImage]=\"'url('+coverImage+')'\"\n      *ngIf=\"coverImage && coverImage !=''\">\n    </div>\n    <!-- <div class=\"div_img back_img\" ></div> -->\n    <p class=\"lbl\">{{'Upload Gallery Images' | translate}}</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('1')\" *ngIf=\"!image1 || image1 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 1</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('1')\" [style.backgroundImage]=\"'url('+image1+')'\"\n            *ngIf=\"image1 && image1 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('2')\" *ngIf=\"!image2 || image2 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 2</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('2')\" [style.backgroundImage]=\"'url('+image2+')'\"\n            *ngIf=\"image2 && image2 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('3')\" *ngIf=\"!image3 || image3 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 3</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('3')\" [style.backgroundImage]=\"'url('+image3+')'\"\n            *ngIf=\"image3 && image3 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('4')\" *ngIf=\"!image4 || image4 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 4</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('4')\" [style.backgroundImage]=\"'url('+image4+')'\"\n            *ngIf=\"image4 && image4 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('5')\" *ngIf=\"!image5 || image5 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 5</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('5')\" [style.backgroundImage]=\"'url('+image5+')'\"\n            *ngIf=\"image5 && image5 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('6')\" *ngIf=\"!image6 || image6 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{'Image' | translate}} 6</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('6')\" [style.backgroundImage]=\"'url('+image6+')'\"\n            *ngIf=\"image6 && image6 !=''\">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button (click)=\"submit()\" expand=\"block\">\n      {{'Submit' | translate}}\n    </ion-button>\n    <ion-button (click)=\"closeIt()\" expand=\"block\" *ngIf=\"status == 'open'\">\n      {{'Close Restaurant' | translate}}\n    </ion-button>\n    <ion-button (click)=\"openIt()\" expand=\"block\" *ngIf=\"status == 'close'\">\n      {{'Open Restaurant' | translate}}\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/venue-profile/venue-profile-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VenueProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePageRoutingModule", function() { return VenueProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _venue_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venue-profile.page */ "./src/app/pages/venue-profile/venue-profile.page.ts");




const routes = [
    {
        path: '',
        component: _venue_profile_page__WEBPACK_IMPORTED_MODULE_3__["VenueProfilePage"]
    }
];
let VenueProfilePageRoutingModule = class VenueProfilePageRoutingModule {
};
VenueProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VenueProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/venue-profile/venue-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: VenueProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePageModule", function() { return VenueProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _venue_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./venue-profile-routing.module */ "./src/app/pages/venue-profile/venue-profile-routing.module.ts");
/* harmony import */ var _venue_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./venue-profile.page */ "./src/app/pages/venue-profile/venue-profile.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let VenueProfilePageModule = class VenueProfilePageModule {
};
VenueProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _venue_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["VenueProfilePageRoutingModule"]
        ],
        declarations: [_venue_profile_page__WEBPACK_IMPORTED_MODULE_6__["VenueProfilePage"]]
    })
], VenueProfilePageModule);



/***/ }),

/***/ "./src/app/pages/venue-profile/venue-profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.mainContent .lbl {\n  color: var(--ion-color-dark);\n  margin: 10px 0px !important;\n  font-weight: bold;\n}\n\n.mainContent .inputText {\n  border: 0.5px solid lightgray;\n  border-radius: 5px;\n  padding: 0px 10px !important;\n}\n\n.mainContent .coverPlaceholder {\n  text-align: center;\n  padding: 60px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n\n.mainContent .galleryPlaceholder {\n  text-align: center;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n\n.mainContent .coverReal {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .galleryReal {\n  width: 100%;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL3ZlbnVlLXByb2ZpbGUvdmVudWUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlbnVlLXByb2ZpbGUvdmVudWUtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUk7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURDSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NSOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NSOztBREVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbnVlLXByb2ZpbGUvdmVudWUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5Db250ZW50e1xuICAgIC5sYmx7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5pbnB1dFRleHR7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvdmVyUGxhY2Vob2xkZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuZ2FsbGVyeVBsYWNlaG9sZGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmNvdmVyUmVhbHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuZ2FsbGVyeVJlYWx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWFpbkNvbnRlbnQgLmxibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmlucHV0VGV4dCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbkNvbnRlbnQgLmNvdmVyUGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZ2FsbGVyeVBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNvdmVyUmVhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluQ29udGVudCAuZ2FsbGVyeVJlYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluQ29udGVudCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/venue-profile/venue-profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: VenueProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePage", function() { return VenueProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);










let VenueProfilePage = class VenueProfilePage {
    constructor(actionSheetController, camera, util, api, navCtrl, router) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.router = router;
        this.image = '';
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.name = '';
        this.address = '';
        this.descritions = '';
        this.haveData = false;
        this.dishPrice = '';
        this.time = '';
        this.phone = '';
        this.status = '';
    }
    ngOnInit() {
    }
    updateSearch() {
    }
    createVenue() {
        this.openTime = moment__WEBPACK_IMPORTED_MODULE_8__(this.openTime).format('HH:mm');
        this.closeTime = moment__WEBPACK_IMPORTED_MODULE_8__(this.closeTime).format('HH:mm');
        const param = {
            uid: localStorage.getItem('uid'),
            name: this.name,
            address: this.address,
            descritions: this.descritions,
            lat: this.latitude,
            lng: this.longitude,
            cover: this.coverImage,
            dishPrice: this.dishPrice,
            time: this.time,
            ratting: 0,
            cusine: this.cusine,
            totalRatting: 0,
            openTime: this.openTime,
            isClose: false,
            closeTime: this.closeTime,
            images: [
                this.image1 ? this.image1 : '',
                this.image2 ? this.image2 : '',
                this.image3 ? this.image3 : '',
                this.image4 ? this.image4 : '',
                this.image5 ? this.image5 : '',
                this.image6 ? this.image6 : ''
            ],
        };
        console.log('param', param);
        this.util.show();
        this.api.createVenue(param).then((data) => {
            this.util.hide();
            console.log(data);
            this.util.showToast(this.util.translate('Restaurant updated successfully'), 'success', 'bottom');
            this.util.publishProfile('update');
            this.navCtrl.back();
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        }).catch(error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        });
    }
    updateVenue() {
        this.openTime = moment__WEBPACK_IMPORTED_MODULE_8__(this.openTime).format('HH:mm');
        this.closeTime = moment__WEBPACK_IMPORTED_MODULE_8__(this.closeTime).format('HH:mm');
        if (this.openTime === 'Invalid date') {
            this.openTime = '10:00';
        }
        if (this.closeTime === 'Invalid date') {
            this.closeTime = '22:00';
        }
        const param = {
            uid: localStorage.getItem('uid'),
            name: this.name,
            address: this.address,
            descritions: this.descritions,
            lat: this.latitude,
            lng: this.longitude,
            cover: this.coverImage,
            dishPrice: this.dishPrice,
            time: this.time,
            cusine: this.cusine,
            openTime: this.openTime,
            closeTime: this.closeTime,
            isClose: false,
            images: [
                this.image1 ? this.image1 : '',
                this.image2 ? this.image2 : '',
                this.image3 ? this.image3 : '',
                this.image4 ? this.image4 : '',
                this.image5 ? this.image5 : '',
                this.image6 ? this.image6 : ''
            ],
        };
        console.log('param', param);
        this.util.show();
        this.api.updateVenue(param).then((data) => {
            this.util.hide();
            console.log(data);
            this.util.showToast(this.util.translate('Restaurant updated successfully'), 'success', 'bottom');
            this.util.publishProfile('update');
            this.navCtrl.back();
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        }).catch(error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        });
    }
    submit() {
        console.log('cusine', this.cusine);
        if (this.name === '' || this.address === '' || this.descritions === '' || this.dishPrice === '' || this.time === '' ||
            !this.cusine || !this.cusine.length || this.openTime === '' || this.closeTime === '' || !this.openTime ||
            !this.closeTime || this.phone === '' || !this.phone) {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.util.errorToast(this.util.translate('Please add your cover image'));
            return false;
        }
        if (this.haveData) {
            console.log('update');
            this.updateVenue();
        }
        else {
            console.log('create');
            this.createVenue();
        }
    }
    cover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
        });
    }
    others(num) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('num', num);
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.translate('Choose from'),
                buttons: [{
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('Delete clicked');
                            this.opemCamera('camera', num);
                        }
                    }, {
                        text: this.util.translate('Gallery'),
                        icon: 'image',
                        handler: () => {
                            console.log('Share clicked');
                            this.opemCamera('gallery', num);
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
            yield actionSheet.present();
        });
    }
    ionViewWillEnter() {
        console.log('newAddressnewAddressnewAddress', localStorage.getItem('newAddress'));
        this.util.show();
        this.api.getVenueDetails(localStorage.getItem('uid')).then(data => {
            this.util.hide();
            console.log(data);
            if (data) {
                this.haveData = true;
                this.name = data.name;
                this.address = data.address;
                this.coverImage = data.cover;
                this.descritions = data.descritions;
                this.image1 = data.images[0];
                this.image2 = data.images[1];
                this.image3 = data.images[2];
                this.image4 = data.images[3];
                this.image5 = data.images[4];
                this.image6 = data.images[5];
                this.latitude = data.lat;
                this.longitude = data.lng;
                this.time = data.time;
                this.dishPrice = data.dishPrice;
                this.cusine = data.cusine;
                this.openTime = data.openTime;
                this.closeTime = data.closeTime;
                this.email = data.email;
                this.phone = data.phone;
                this.status = data.status;
                if (localStorage.getItem('newAddress') && localStorage.getItem('newAddress') != null) {
                    this.address = localStorage.getItem('newAddress');
                }
                if (localStorage.getItem('newLng') && localStorage.getItem('newLng') != null) {
                    this.longitude = localStorage.getItem('newLng');
                }
                if (localStorage.getItem('newLat') && localStorage.getItem('newLat') != null) {
                    this.latitude = localStorage.getItem('newLat');
                }
            }
            else {
                localStorage.clear();
                this.router.navigate(['login']);
            }
            if (localStorage.getItem('newAddress') && localStorage.getItem('newAddress') != null) {
                this.address = localStorage.getItem('newAddress');
            }
            if (localStorage.getItem('newLng') && localStorage.getItem('newLng') != null) {
                this.longitude = localStorage.getItem('newLng');
            }
            if (localStorage.getItem('newLat') && localStorage.getItem('newLat') != null) {
                this.latitude = localStorage.getItem('newLat');
            }
        }).catch(error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    opemCamera(type, num) {
        const options = {
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
            const id = localStorage.getItem('uid') + '/' + this.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(base64Image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    if (!num) {
                        this.coverImage = url;
                    }
                    else if (num === 1 || num === '1') {
                        this.image1 = url;
                    }
                    else if (num === 2 || num === '2') {
                        this.image2 = url;
                    }
                    else if (num === 3 || num === '3') {
                        this.image3 = url;
                    }
                    else if (num === 4 || num === '4') {
                        this.image4 = url;
                    }
                    else if (num === 5 || num === '5') {
                        this.image5 = url;
                    }
                    else if (num === 6 || num === '6') {
                        this.image6 = url;
                    }
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            });
        }, (err) => {
            this.util.hide();
            console.log(err);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    dismiss() {
    }
    closeIt() {
        const param = {
            uid: localStorage.getItem('uid'),
            status: 'close',
        };
        this.util.show();
        this.api.updateVenue(param).then((data) => {
            this.util.hide();
            console.log(data);
            this.util.showToast(this.util.translate('Restaurant updated successfully'), 'success', 'bottom');
            this.util.publishProfile('update');
            this.navCtrl.back();
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        }).catch(error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        });
    }
    openIt() {
        const param = {
            uid: localStorage.getItem('uid'),
            status: 'open',
        };
        this.util.show();
        this.api.updateVenue(param).then((data) => {
            this.util.hide();
            console.log(data);
            this.util.publishProfile('update');
            this.util.showToast(this.util.translate('Restaurant updated successfully'), 'success', 'bottom');
            this.navCtrl.back();
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        }).catch(error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(error);
        });
    }
    openMap() {
        localStorage.removeItem('newAddress');
        localStorage.removeItem('newLng');
        localStorage.removeItem('newLat');
        this.router.navigate(['maps']);
    }
};
VenueProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
], VenueProfilePage.prototype, "searchbar", void 0);
VenueProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-venue-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./venue-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-profile/venue-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./venue-profile.page.scss */ "./src/app/pages/venue-profile/venue-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], VenueProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-venue-profile-venue-profile-module-es2015.js.map