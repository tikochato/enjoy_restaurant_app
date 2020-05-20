(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-foods-foods-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Foods' | translate}}</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{'No Foods Found' | translate}}</h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <div *ngFor=\"let item of categories\">\n      <ion-label class=\"head_lbl\">{{item.name}}</ion-label>\n\n      <div *ngFor=\"let food of foods;\">\n        <span *ngIf=\"item.id == food.cid.id\" class=\"card_div\" (click)=\"foodsInfo(food)\">\n          <!-- <div class=\"back_image\" [style.backgroundImage]=\"'url('+food.cover+')'\"></div> -->\n          <img [src]=\"food.cover\" class=\"back_image\" alt=\"\">\n          <div class=\"content_div\">\n            <ion-label class=\"title\">{{food.name}}</ion-label>\n            <ion-label class=\"small\">{{food.desc}}</ion-label>\n            <ion-label *ngIf=\"food.veg\" class=\"veg\">Veg</ion-label>\n            <ion-label *ngIf=\"!food.veg\" class=\"nonVeg\">Non Veg</ion-label>\n\n            <ion-label class=\"title\">$ {{food.price}}</ion-label>\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/foods/foods-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/foods/foods-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPageRoutingModule", function() { return FoodsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foods.page */ "./src/app/pages/foods/foods.page.ts");




const routes = [
    {
        path: '',
        component: _foods_page__WEBPACK_IMPORTED_MODULE_3__["FoodsPage"]
    }
];
let FoodsPageRoutingModule = class FoodsPageRoutingModule {
};
FoodsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/foods/foods.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/foods/foods.module.ts ***!
  \*********************************************/
/*! exports provided: FoodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPageModule", function() { return FoodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foods-routing.module */ "./src/app/pages/foods/foods-routing.module.ts");
/* harmony import */ var _foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foods.page */ "./src/app/pages/foods/foods.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let FoodsPageModule = class FoodsPageModule {
};
FoodsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodsPageRoutingModule"]
        ],
        declarations: [_foods_page__WEBPACK_IMPORTED_MODULE_6__["FoodsPage"]]
    })
], FoodsPageModule);



/***/ }),

/***/ "./src/app/pages/foods/foods.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/foods/foods.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainContent {\n  padding: 20px;\n}\n.mainContent .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n.mainContent .card_div {\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.mainContent .card_div .back_image {\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .card_div .content_div {\n  padding-left: 20px;\n}\n.mainContent .card_div .content_div ion-label {\n  display: flex;\n}\n.mainContent .card_div .content_div .title {\n  font-weight: 600;\n  font-size: 16px;\n}\n.mainContent .card_div .content_div .small {\n  color: gray;\n  font-size: 14px;\n}\n.mainContent .card_div .content_div .veg {\n  color: green;\n}\n.mainContent .card_div .content_div .nonVeg {\n  color: red;\n}\n.mainContent .card_div .content_div .lonveg {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL2Zvb2RzL2Zvb2RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9vZHMvZm9vZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEeUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDdkNSO0FENENJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzFDUjtBRDJDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUN6Q1o7QUQyQ1E7RUFDSSxrQkFBQTtBQ3pDWjtBRDBDWTtFQUNJLGFBQUE7QUN4Q2hCO0FEMkNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDekNoQjtBRDJDWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDekNoQjtBRDJDWTtFQUNJLFlBQUE7QUN6Q2hCO0FEMkNZO0VBQ0ksVUFBQTtBQ3pDaEI7QUQyQ1k7RUFDSSwrQkFBQTtBQ3pDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb29kcy9mb29kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyAuY2F0ZU5hbWV7XG4gICAgLy8gICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC8vICAgICBjb2xvcjogYmxhY2s7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIH1cbiAgICAvLyAuZm9vZHN7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAvLyAgICAgcGFkZGluZzogMTBweDtcbiAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxNHB4IDJweCBsaWdodGdyZXk7XG4gICAgLy8gICAgIC5iZ0NvdmVye1xuICAgIC8vICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgLy8gICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyAgICAgfSBcbiAgICAvLyAgICAgLm5hbWV7XG4gICAgLy8gICAgICAgICBtYXJnaW46IDBweDtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5kZXNjcmlwdGlvbntcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5wcmljZXtcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5jYXRle1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG5cbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG5cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGx7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm9uVmVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9udmVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iLCIubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAuc21hbGwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLnZlZyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC5ub25WZWcge1xuICBjb2xvcjogcmVkO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLmxvbnZlZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/foods/foods.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/foods/foods.page.ts ***!
  \*******************************************/
/*! exports provided: FoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPage", function() { return FoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");





let FoodsPage = class FoodsPage {
    constructor(router, api, util) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.foods = [];
        this.categories = [];
        this.dummy = Array(50);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getFoods();
    }
    getFoods() {
        this.api.getVenueCategories(localStorage.getItem('uid')).then((data) => {
            console.log(data);
            this.dummy = [];
            if (data) {
                this.categories = data;
                this.api.getFoods(localStorage.getItem('uid')).then((data) => {
                    console.log(data);
                    if (data) {
                        this.foods = data;
                    }
                }, error => {
                    console.log(error);
                    this.dummy = [];
                    this.util.errorToast(this.util.translate('Something went wrong'));
                }).catch(error => {
                    this.dummy = [];
                    console.log(error);
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    addnew() {
        this.router.navigate(['/add-new-foods']);
    }
    foodsInfo(item) {
        console.log(item);
        const navData = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['add-new-foods'], navData);
    }
};
FoodsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
FoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foods',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./foods.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./foods.page.scss */ "./src/app/pages/foods/foods.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
], FoodsPage);



/***/ })

}]);
//# sourceMappingURL=pages-foods-foods-module-es2015.js.map