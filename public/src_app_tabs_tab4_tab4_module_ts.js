"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tab4_tab4_module_ts"],{

/***/ 420:
/*!**************************************************!*\
  !*** ./src/app/tabs/tab4/tab4-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3560);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 8066:
/*!******************************************!*\
  !*** ./src/app/tabs/tab4/tab4.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3560);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4-routing.module */ 420);
/* harmony import */ var _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab2/tab2-routing.module */ 401);









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab4PageRoutingModule,
            _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3560:
/*!****************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 4556);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 2961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tab4Page = class Tab4Page {
    constructor() {
        this.showExercisesList = false;
        this.exercises = [
            { name: 'Медитация Золотого цветка', url: '/dic/golden-flower' },
            { name: 'Шесть целительных звуков', url: '/dic/six-healing-sounds' }
        ];
    }
    onHeaderClick(header) {
        switch (header) {
            case 'showExercisesList':
                this.showExercisesList = !this.showExercisesList;
                break;
        }
    }
};
Tab4Page.ctorParameters = () => [];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 2961:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n}\n.group {\n  text-align: left;\n}\n#container {\n  font-family: \"ChinaCyr\", sans-serif;\n  text-align: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n}\n.group-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.mainIcon {\n  width: 250px;\n  height: 250px;\n}\n.in-construction {\n  pointer-events: none;\n  color: #cdcdcd;\n}\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUNGO0FBR0E7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0FBREYiLCJmaWxlIjoidGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2hpbmFDeXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvY2hpbmFjeXIudHRmXCIpO1xufVxuXG5cbi5ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJDaGluYUN5clwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLmdyb3VwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbkljb24ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5pbi1jb25zdHJ1Y3Rpb257XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogI2NkY2RjZDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 4556:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab4/tab4.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <app-top></app-top>\n  <div id=\"container\">\n    <strong>Справочники</strong>\n    <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI\n      Components</a></p>\n    <br>\n    <img class=\"mainIcon\" src=\"../../../assets/icon/dictionary.png\" alt=\"\">\n    <br>\n    <br>\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n        <h4><b>Упражнения</b></h4>\n        <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showExercisesList\">\n        <a *ngFor=\"let e of exercises\" [routerLink]=\"e.url\"><p>{{e.name}}</p></a>\n      </div>\n    </div>\n\n    <div class=\"in-construction\">\n      <div class=\"group\">\n        <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n          <h4>Травы</h4>\n          <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n          <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n        </div>\n\n      </div>\n\n      <div class=\"group\">\n        <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n          <h4>Камни</h4>\n          <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n          <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n        </div>\n\n      </div>\n\n      <div class=\"group\">\n        <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n          <h4>Животные</h4>\n          <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n          <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n        </div>\n\n      </div>\n\n      <div class=\"group\">\n        <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n          <h4>Персонажи</h4>\n          <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n          <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n        </div>\n\n      </div>\n\n      <div class=\"group\">\n        <div class=\"group-header\" (click)=\"onHeaderClick('showExercisesList')\">\n          <h4>Артефакты</h4>\n          <ion-icon *ngIf=\"showExercisesList\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n          <ion-icon *ngIf=\"!showExercisesList\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tab4_tab4_module_ts.js.map