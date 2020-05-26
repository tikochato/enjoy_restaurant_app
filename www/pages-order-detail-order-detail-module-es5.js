function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderDetailOrderDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Order Details' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"printOrder()\">\n        <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n        {{'Print' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div *ngIf=\"loaded\" class=\"main_content_div\">\n\n\n    <div class=\"card_div\">\n      <div class=\"resto_detail\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+userPic+')'\"></div>\n        <div style=\"margin-left: 10px;\">\n          <ion-label class=\"res_name\">{{userName}}</ion-label>\n          <ion-label class=\"res_location\">{{time}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"orderId\">\n      <div class=\"order_id\">\n        <ion-label>{{'Order ID' | translate}}</ion-label>\n        <ion-label>{{id}}</ion-label>\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n\n    <div class=\"card_div2\" *ngIf=\"phone\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{phone}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"call()\" size=\"small\" fill=\"outline\">{{'Call' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\" *ngIf=\"userEmail\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{userEmail}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"email()\" size=\"small\" fill=\"outline\">{{'Email' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"location\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{deliveryAddress}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div *ngIf=\"status != 'delivered'  && status != 'cancel' && status !='reject' && status !='created' \">\n          <ion-button (click)=\"goToTracker()\" size=\"small\" fill=\"outline\">{{'Navigate' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\">\n      <div class=\"order_detail\">\n        <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n        <div class=\"small_lbl\">\n          <ion-label *ngFor=\"let order of orders\">{{order.quantiy}} X {{order.name}} <span\n              class=\"prize\">{{'currencyCode' | translate}} {{order.price}}</span></ion-label>\n        </div>\n        <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n        <ion-label class=\"small_lbl\">{{time}} </ion-label>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n    <div class=\"card_div2\">\n\n      <div class=\"order_detail\">\n        <ion-label class=\"small_lbl2\">{{'SubTotal' | translate}}<span class=\"prize1\">{{'currencyCode' | translate}} {{total}}</span></ion-label>\n        <ion-label class=\"small_lbl2\">{{'Delivery Charge' | translate}}<span class=\"prize1\">{{'currencyCode' | translate}} 5</span></ion-label>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Total' | translate}}<span class=\"prize1\">{{'currencyCode' | translate}} {{grandTotal}}</span></ion-label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\" *ngIf=\"status == 'created'\">\n      <ion-button (click)=\"changeStatus('rejected')\" size=\"small\" class=\"reject\">\n        {{'Reject Order' | translate}}\n      </ion-button>\n      <ion-button (click)=\"changeStatus('accepted')\" size=\"small\" class=\"accept\">\n        {{'Accept Order' | translate}}\n      </ion-button>\n    </div>\n\n    <div class=\"status_div\" *ngIf=\"status == 'accepted' || status == 'ongoing' \">\n      <div style=\"width: 200px;\">\n        <ion-select placeholder=\"Choose Status\" [(ngModel)]=\"changeStatusOrder\">\n          <ion-select-option value=\"ongoing\">{{'Ongoing' |  translate}}</ion-select-option>\n          <ion-select-option value=\"cancel\">{{'Cancel' | translate}}</ion-select-option>\n          <ion-select-option value=\"delivered\">{{'Delivered' | translate}}</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div>\n        <ion-button (click)=\"changeOrderStatus()\" size=\"small\">\n          {{'Update Status' | translate}}\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-label class=\"green\" *ngIf=\"status == 'delivered'\">{{'Order Status' | translate}} :\n      {{'Order Delivered' | translate}}</ion-label>\n    <ion-label class=\"red\" *ngIf=\"status == 'cancel'\">{{'Order Cancelled by user' | translate}}</ion-label>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/order-detail/order-detail-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderDetailPageRoutingModule */

  /***/
  function srcAppPagesOrderDetailOrderDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function () {
      return OrderDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-detail.page */
    "./src/app/pages/order-detail/order-detail.page.ts");

    var routes = [{
      path: '',
      component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }];

    var OrderDetailPageRoutingModule = function OrderDetailPageRoutingModule() {
      _classCallCheck(this, OrderDetailPageRoutingModule);
    };

    OrderDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-detail/order-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: OrderDetailPageModule */

  /***/
  function srcAppPagesOrderDetailOrderDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function () {
      return OrderDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-detail-routing.module */
    "./src/app/pages/order-detail/order-detail-routing.module.ts");
    /* harmony import */


    var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-detail.page */
    "./src/app/pages/order-detail/order-detail.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var OrderDetailPageModule = function OrderDetailPageModule() {
      _classCallCheck(this, OrderDetailPageModule);
    };

    OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]],
      declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })], OrderDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/order-detail/order-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderDetailOrderDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .orderId {\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .accept {\n  --background: green;\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRGhCO0FESVk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGZDtBRElZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGaEI7QURLWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0hoQjtBREtnQjtFQUNHLGlCQUFBO0FDSG5CO0FEU0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEV0k7RUFDSSxrQkFBQTtBQ1RSO0FEVVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDUlo7QURVWTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQ1JoQjtBRFVZO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ1JoQjtBRFVhO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FDUmQ7QURhWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYaEI7QURhWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1hoQjtBRGNZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDWmhCO0FEZVk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNiaEI7QURpQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2ZoQjtBRHFCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ2xCSjtBRG9CSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDbEJSO0FEb0JJO0VBQ0ksbUJBQUE7QUNsQlI7QURzQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURxQkk7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNuQlI7QURzQkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDcEJSO0FEd0JBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckJKO0FEdUJBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ3BCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubGluZV9kaXZ7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAucmVzdG9fZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm9yZGVySWR7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG5cbiAgICAuY2FyZF9kaXYye1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIC5wZXJzb25hbF9kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAuaGVhZF9ncmF5e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUxe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmwye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAuYWNjZXB0e1xuICAgICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b20gOjNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5vcmRlcklkIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG5fZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLmJ0bl9kaXYgLmFjY2VwdCB7XG4gIC0tYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5zdGF0dXNfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzX2RpdiBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTozcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXR1c19kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ3JlZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/order-detail/order-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: OrderDetailPage */

  /***/
  function srcAppPagesOrderDetailOrderDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function () {
      return OrderDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../select-drivers/select-drivers.page */
    "./src/app/pages/select-drivers/select-drivers.page.ts");
    /* harmony import */


    var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/printer/ngx */
    "./node_modules/@ionic-native/printer/ngx/index.js");

    var OrderDetailPage = /*#__PURE__*/function () {
      function OrderDetailPage(router, route, api, util, navCtrl, printer, modalController) {
        _classCallCheck(this, OrderDetailPage);

        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.printer = printer;
        this.modalController = modalController;
        this.orders = [];
        this.drivers = [];
        this.dummyDriver = [];
        this.orderString = [];
        this.loaded = false;
      }

      _createClass(OrderDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log(data);
            _this.id = data.id;
            console.log('thisidd', _this.id);

            _this.getOrder();
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.util.publishNewAddress('hello');
          this.navCtrl.back();
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__["SelectDriversPage"],
                      backdropDismiss: false,
                      showBackdrop: true,
                      componentProps: {
                        item: this.dummyDriver
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'selected') {
                        _this2.drivers = data.data;

                        if (_this2.drivers && _this2.drivers.length) {
                          _this2.placeOrder();
                        }
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          var _this3 = this;

          var param = {
            driverId: this.drivers[0].uid,
            dId: this.drivers[0].uid,
            status: 'accepted'
          };
          var value = 'accepted';
          this.util.show(this.util.translate('Please wait'));
          this.api.updateOrder(this.id, param).then(function (data) {
            var parm = {
              current: 'busy'
            };

            _this3.api.updateProfile(_this3.drivers[0].uid, parm).then(function (data) {
              console.log(data);
            })["catch"](function (error) {
              console.log(error);
            });

            if (_this3.drivers[0] && _this3.drivers[0].fcm_token !== '') {
              _this3.api.sendNotification(_this3.util.translate('New Order Received '), _this3.util.translate('New Order'), _this3.drivers[0].fcm_token).subscribe(function (data) {
                console.log('send notifications', data);
              }, function (error) {
                console.log(error);
              });
            }

            console.log('data', data);

            var msg = _this3.util.translate('Your Order is ') + value + _this3.util.translate(' By ') + _this3.restName;

            _this3.api.sendNotification(msg, 'Order ' + value, _this3.token).subscribe(function (data) {
              console.log(data);

              _this3.util.hide();

              _this3.navCtrl.back();
            }, function (error) {
              _this3.util.hide();

              console.log('err', error);
            });

            _this3.util.publishNewAddress('hello');

            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: _this3.util.translate('success'),
              text: _this3.util.translate('Order status changed to ') + value,
              icon: 'success',
              timer: 2000,
              backdrop: false,
              background: 'white'
            });

            _this3.navCtrl.back();
          })["catch"](function (error) {
            console.log(error);

            _this3.util.hide();

            _this3.util.errorToast(_this3.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          var _this4 = this;

          this.api.getDrivers().then(function (data) {
            console.log('drivers', data);
            _this4.dummyDriver = [];
            _this4.drivers = [];

            if (data && data.length > 0) {
              data.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var distance;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));

                        case 2:
                          distance = _context2.sent;
                          console.log(distance);

                          if (element.current === 'active' && element.status === 'active') {
                            element.distance = distance ? distance : 10;
                            this.dummyDriver.push(element);
                          }

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
              data.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var distance;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));

                        case 2:
                          distance = _context3.sent;

                          if (distance < 10 && element.current === 'active' && element.status === 'active') {
                            this.drivers.push(element);
                          }

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          var _this5 = this;

          this.api.getOrderById(this.id).then(function (data) {
            _this5.loaded = true;
            console.log(data);

            if (data) {
              _this5.grandTotal = data.grandTotal;
              _this5.orders = JSON.parse(data.order);
              _this5.serviceTax = data.serviceTax;
              _this5.status = data.status;
              _this5.time = data.time;
              _this5.total = data.total;
              _this5.address = data.vid.address;
              _this5.restName = data.vid.name;
              _this5.deliveryAddress = data.address.address;

              if (data && data.vid && data.vid.lat) {
                _this5.userLat = data.vid.lat;
                _this5.userLng = data.vid.lng;
              }

              _this5.userName = data.uid.fullname;
              _this5.phone = data.uid.phone;
              _this5.token = data.uid.fcm_token;
              _this5.userEmail = data.uid.email;
              _this5.paid = data.paid;
              _this5.userPic = data.uid && data.uid.cover ? data.uid.cover : 'assets/imgs/user.jpg';
              console.log('this', _this5.orders);

              _this5.getDrivers();

              _this5.orders.forEach(function (element) {
                _this5.orderString.push('<p style="border-bottom: 1px dashed black;"><span style="float: left;">' + element.name + ' X ' + element.quantiy + ' </span> <span style="float: right;">' + element.price + '$</span> </p>');
              });

              console.log('orderstring', _this5.orderString);
            }
          }, function (error) {
            _this5.loaded = true;

            _this5.util.errorToast(_this5.util.translate('Something went wrong'));

            console.log('error in orders', error);
          })["catch"](function (error) {
            _this5.loaded = true;

            _this5.util.errorToast(_this5.util.translate('Something went wrong'));

            console.log('error in order', error);
          });
        }
      }, {
        key: "goToTracker",
        value: function goToTracker() {
          var navData = {
            queryParams: {
              id: this.id
            }
          };
          this.router.navigate(['/tracker'], navData);
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(value) {
          var _this6 = this;

          if (value === 'accepted') {
            console.log('accepted', this.drivers);
            this.presentModal();
          } else {
            this.util.show(this.util.translate('Please wait'));
            this.api.updateOrderStatus(this.id, value).then(function (data) {
              console.log('data', data);

              var msg = _this6.util.translate('Your Order is ') + value + _this6.util.translate(' By ') + _this6.restName;

              _this6.api.sendNotification(msg, 'Order ' + value, _this6.token).subscribe(function (data) {
                console.log(data);

                _this6.util.hide();

                _this6.navCtrl.back();
              }, function (error) {
                _this6.util.hide();

                console.log('err', error);
              });

              _this6.util.publishNewAddress('hello');

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: _this6.util.translate('success'),
                text: _this6.util.translate('Order status changed to ') + value,
                icon: 'success',
                timer: 2000,
                backdrop: false,
                background: 'white'
              });

              _this6.navCtrl.back();
            })["catch"](function (error) {
              console.log(error);

              _this6.util.hide();

              _this6.util.errorToast(_this6.util.translate('Something went wrong'));
            });
          }
        }
      }, {
        key: "changeOrderStatus",
        value: function changeOrderStatus() {
          console.log('order status', this.changeStatusOrder);

          if (this.changeStatusOrder) {
            this.changeStatus(this.changeStatusOrder);
          }
        }
      }, {
        key: "call",
        value: function call() {
          if (this.phone) {
            window.open('tel:' + this.phone);
          } else {
            this.util.errorToast(this.util.translate('Number not found'));
          }
        }
      }, {
        key: "email",
        value: function email() {
          if (this.userEmail) {
            window.open('mailto:' + this.userEmail);
          } else {
            this.util.errorToast(this.util.translate('Email not found'));
          }
        }
      }, {
        key: "printOrder",
        value: function printOrder() {
          var options = {
            name: 'Enjoy Order Summary',
            duplex: false
          };
          var order = this.orderString.join('');
          var content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Enjoy Order Summary</h2> <p style="float: left;"><b>' + this.id + '</b></p> <p style="float: left;"><b>' + this.restName + '</b></p> <p style="float: left;"><b>' + this.userName + '</b></p> <p style="float: left;">' + this.time + ' </p> <p style="font-weight: bold;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">$' + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">$5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Service Tax') + '</span> <span style="float: right;font-weight: bold;">$' + this.serviceTax + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">$' + this.grandTotal + '</span> </p> <h1 style="text-align: center;text-transform: uppercase;">' + this.paid + '</h1> </div>';
          this.printer.print(content, options).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);

      return OrderDetailPage;
    }();

    OrderDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-detail.page.scss */
      "./src/app/pages/order-detail/order-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], OrderDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es5.js.map