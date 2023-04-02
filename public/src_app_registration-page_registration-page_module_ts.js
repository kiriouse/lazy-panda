"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registration-page_registration-page_module_ts"],{

/***/ 9264:
/*!***************************************************************!*\
  !*** ./src/app/registration-page/registration-page.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": () => (/* binding */ RegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _registration_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-page.component */ 6626);
/* harmony import */ var _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page.routing.module */ 235);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegistrationPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_registration_page_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageComponent],
    })
], RegistrationPageModule);



/***/ }),

/***/ 235:
/*!***********************************************************************!*\
  !*** ./src/app/registration-page/registration-page.routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": () => (/* binding */ RegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registration_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-page.component */ 6626);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





const routes = [
    {
        path: '',
        component: _registration_page_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageComponent,
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        declarations: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RegistrationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=src_app_registration-page_registration-page_module_ts.js.map