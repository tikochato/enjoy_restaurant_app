function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-slides mode=\"md\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <h2 class=\"ion-text-center\">{{'Sign Up' |  translate}}</h2>\n        <p class=\"subtitle ion-text-center\">Enter your profile detail to <br>access your account </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" [placeholder]=\"('Email' | translate )\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"emailValidation()\" expand=\"block\" [disabled]=\"isLogin\">\n\n          <span *ngIf=\"!isLogin\"> {{'Next' |  translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n\n    <!-- <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <p class=\"subtitle ion-text-center\">Create Strong Password for your account </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"password()\" expand=\"block\">\n          Next\n        </ion-button>\n      </div>\n    </ion-slide> -->\n\n    <ion-slide>\n      <ion-button (click)=\"prev()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" [placeholder]=\"('First Name' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" [placeholder]=\"('Last Name' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" [(ngModel)]=\"user.phone\" [placeholder]=\"('Phone Number' | translate )\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" [placeholder]=\"('Password' | translate )\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"submit()\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{'Submit' | translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 90vh;\n}\n\n.backBtn {\n  position: absolute;\n  top: 20px;\n  left: 0;\n}\n\nh2 {\n  color: var(--ion-color-primary) !important;\n}\n\np {\n  color: var(--ion-color-primary) !important;\n}\n\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n\n.btn_class {\n  color: var(--ion-color-primary);\n  height: 50px;\n  margin-top: 20px;\n}\n\n.emailForm {\n  text-align: center;\n  width: 100%;\n}\n\n.emailForm .login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n\n.emailForm .login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.emailForm .back_img {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 95% !important;\n  height: 25vh;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n\n.emailForm .back_img .gender {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 25px !important;\n  height: 25px;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZvY2hvYS9kZXYvdGlrby9lbmpveS9lbmpveV9yZXN0YXVyYW50X2FwcC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NKOztBRENBO0VBQ0ksMENBQUE7QUNFSjs7QURBQTtFQUNJLDBDQUFBO0FDR0o7O0FEREE7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQztFQUNHLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNNSjs7QURMSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDT1I7O0FETlE7RUFDSSx1QkFBQTtBQ1FaOztBRExLO0VBQ0csMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ09SOztBRExRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ09aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tc2xpZGVze1xuICAgIGhlaWdodDogOTB2aDtcbn1cbi5iYWNrQnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMDtcbn1cbmgye1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbnB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4gLmJ0bl9jbGFzc3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5lbWFpbEZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAubG9nb19pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIC5iYWNrX2ltZ3tcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDZweCA2cHggMjBweCAwcHggd2hpdGU7XG4gICAgICAgIC5nZW5kZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuLmJhY2tCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMDtcbn1cblxuaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVtYWlsRm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZW1haWxGb3JtIC5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmVtYWlsRm9ybSAubG9naW4tbG9nbyAubG9nb19pY29uIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG4uZW1haWxGb3JtIC5iYWNrX2ltZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjV2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZW1haWxGb3JtIC5iYWNrX2ltZyAuZ2VuZGVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(location, util, api, navCtrl) {
        _classCallCheck(this, RegisterPage);

        this.location = location;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.user = {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          gender: 'male',
          phone: '',
          address: '',
          avatar: ''
        };
        this.slideOpts = {
          slidesPerView: 1,
          allowTouchMove: false
        };
        this.submitted = false;
        this.isLogin = false;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goNext",
        value: function goNext() {
          this.slides.slideNext(500).then(function (d) {
            return console.log(d);
          });
        }
      }, {
        key: "emailValidation",
        value: function emailValidation() {
          var _this = this;

          console.log('user', this.user);
          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (this.user.email === '' || !this.user.email) {
            this.util.showToast(this.util.translate('Please enter email'), 'danger', 'bottom');
            return false;
          }

          if (!emailfilter.test(this.user.email)) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
            return false;
          }

          this.isLogin = true;
          this.api.checkEmail(this.user.email).then(function (datas) {
            _this.isLogin = false;

            if (!datas.length) {
              _this.goNext();
            } else {
              _this.util.hide();

              _this.util.showErrorAlert(_this.util.translate('this email id is already register, please use another to login'));

              return false;
            }
          }, function (error) {
            _this.isLogin = false;

            _this.util.hide();

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          })["catch"](function (error) {
            _this.isLogin = false;

            _this.util.hide();

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "prev",
        value: function prev() {
          this.slides.slidePrev(1000).then(function (d) {
            return console.log(d);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.isLogin = true;
          this.api.register(this.user.email, this.user.password, this.user.first_name, this.user.last_name).then(function (data) {
            console.log(data);
            _this2.isLogin = false;

            if (data && data.uid) {
              localStorage.setItem('uid', data.uid);

              _this2.navCtrl.navigateRoot(['/']);
            }
          })["catch"](function (error) {
            console.log(error);
            _this2.isLogin = false;

            _this2.util.showToast("".concat(error), 'danger', 'bottom');
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], RegisterPage.prototype, "slides", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map