(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-foods-add-new-foods-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-foods/add-new-foods.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-foods/add-new-foods.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{isEdit ? 'Edit Food':'Add Food' }}</ion-title> -->\n\n    <ion-title *ngIf=\"isEdit\">{{'Edit Food' | translate}}</ion-title>\n\n    <ion-title *ngIf=\"!isEdit\">{{'Add Food' | translate}}</ion-title>\n\n    <!-- <ion-button *ngIf=\"isEdit == true\" slot=\"end\" class=\"delete_icn\" icli fill=\"clear\">\n      Delete\n    </ion-button> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>{{'Category' | translate}}</ion-label>\n        <ion-select [(ngModel)]=\"cid\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option *ngFor=\"let item of categories\" [value]=\"item.id\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" [placeholder]=\"('Food Name' | translate )\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"price\" type=\"number\" [placeholder]=\"('Price' | translate )\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'Variation' | translate}}</ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"variation\"></ion-toggle>\n      </ion-item>\n      <ion-item *ngIf=\"variation\">\n        <ion-input [(ngModel)]=\"smallPrice\" type=\"number\" [placeholder]=\"('Small Price' | translate )\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"variation\">\n        <ion-input [(ngModel)]=\"mediumPrice\" type=\"number\" [placeholder]=\"('Medium Price' | translate )\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"variation\">\n        <ion-input [(ngModel)]=\"largePrice\" type=\"number\" [placeholder]=\"('Large Price' | translate )\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'Veg' | translate}}</ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"veg\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-textarea [(ngModel)]=\"descriptions\" rows=\"5\" [placeholder]=\"('Short descriptions' | translate )\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{'Status' | translate}}</ion-label>\n        <ion-select [(ngModel)]=\"status\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"true\">{{'Available' | translate}}</ion-select-option>\n          <ion-select-option value=\"false\">{{'Hide' | translate}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div class=\"coverPlaceholder\" (click)=\"cover()\" *ngIf=\"!coverImage || coverImage ==''\">\n        <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n        <p>{{'Upload foods cover image here' | translate}}</p>\n      </div>\n      <div class=\"coverReal\" (click)=\"cover()\" [style.backgroundImage]=\"'url('+coverImage+')'\"\n        *ngIf=\"coverImage && coverImage !=''\">\n      </div>\n      <ion-button (click)=\"submit()\" expand=\"block\">\n        {{'Submit' | translate}}\n      </ion-button>\n    </ion-list>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-new-foods/add-new-foods-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-new-foods/add-new-foods-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddNewFoodsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewFoodsPageRoutingModule", function() { return AddNewFoodsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_new_foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-foods.page */ "./src/app/pages/add-new-foods/add-new-foods.page.ts");




const routes = [
    {
        path: '',
        component: _add_new_foods_page__WEBPACK_IMPORTED_MODULE_3__["AddNewFoodsPage"]
    }
];
let AddNewFoodsPageRoutingModule = class AddNewFoodsPageRoutingModule {
};
AddNewFoodsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNewFoodsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-new-foods/add-new-foods.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-new-foods/add-new-foods.module.ts ***!
  \*************************************************************/
/*! exports provided: AddNewFoodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewFoodsPageModule", function() { return AddNewFoodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_new_foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-foods-routing.module */ "./src/app/pages/add-new-foods/add-new-foods-routing.module.ts");
/* harmony import */ var _add_new_foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-foods.page */ "./src/app/pages/add-new-foods/add-new-foods.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let AddNewFoodsPageModule = class AddNewFoodsPageModule {
};
AddNewFoodsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _add_new_foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewFoodsPageRoutingModule"]
        ],
        declarations: [_add_new_foods_page__WEBPACK_IMPORTED_MODULE_6__["AddNewFoodsPage"]]
    })
], AddNewFoodsPageModule);



/***/ }),

/***/ "./src/app/pages/add-new-foods/add-new-foods.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-new-foods/add-new-foods.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.delete_icn {\n  color: white;\n  font-weight: 600;\n}\n\n.mainContent .coverPlaceholder {\n  text-align: center;\n  padding: 60px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n\n.mainContent .coverReal {\n  margin-top: 10px;\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL2FkZC1uZXctZm9vZHMvYWRkLW5ldy1mb29kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1uZXctZm9vZHMvYWRkLW5ldy1mb29kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDUjs7QURFSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLW5ldy1mb29kcy9hZGQtbmV3LWZvb2RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kZWxldGVfaWNue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFpbkNvbnRlbnR7XG4gICAgLmNvdmVyUGxhY2Vob2xkZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuY292ZXJSZWFse1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRlbGV0ZV9pY24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluQ29udGVudCAuY292ZXJQbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jb3ZlclJlYWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-new-foods/add-new-foods.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-new-foods/add-new-foods.page.ts ***!
  \***********************************************************/
/*! exports provided: AddNewFoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewFoodsPage", function() { return AddNewFoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");









let AddNewFoodsPage = class AddNewFoodsPage {
    constructor(actionSheetController, camera, util, api, router, navCtrl, route) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.categories = [];
        this.image = '';
        this.db = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
        this.isEdit = false;
        this.veg = true;
        this.variation = false;
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
                        }
                        else {
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
    opemCamera(type) {
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
            const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
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
        }
        else {
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
};
AddNewFoodsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddNewFoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-new-foods',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-new-foods.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-foods/add-new-foods.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-new-foods.page.scss */ "./src/app/pages/add-new-foods/add-new-foods.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddNewFoodsPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-new-foods-add-new-foods-module-es2015.js.map