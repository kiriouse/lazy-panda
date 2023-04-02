"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tab1_tab1_module_ts"],{

/***/ 8176:
/*!**************************************************!*\
  !*** ./src/app/tabs/tab1/tab1-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4560);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4073:
/*!******************************************!*\
  !*** ./src/app/tabs/tab1/tab1.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4560);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 8176);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page }]),
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule,
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 4560:
/*!****************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 5188);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 2298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/ionic-auth.service */ 4304);





let Tab1Page = class Tab1Page {
    constructor(authService) {
        this.authService = authService;
        this.showExercisesList = false;
        this.exercises = [
            { name: 'Медитация Золотого цветка', url: '/dic/golden-flower' },
            { name: 'Шесть целительных звуков', url: '/dic/six-healing-sounds' },
        ];
    }
    ngOnInit() {
        this.isAuthorized = this.authService.isUserLoggedIn();
    }
    onHeaderClick(header) {
        switch (header) {
            case 'showExercisesList':
                this.showExercisesList = !this.showExercisesList;
                break;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab4',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2298:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n}\n.group {\n  text-align: left;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n  height: 90%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  font-size: 20px;\n  line-height: 26px;\n  background: url('main_screen_background.jpeg') no-repeat center bottom;\n  background-size: 600px 620px;\n  filter: brightness(1.15) saturate(0.6);\n}\n.authorizationContainer {\n  width: 100%;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  padding: 0 30px;\n  margin-top: -25px;\n}\n.authorizationContainer p a {\n  color: red;\n}\n.group-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.mainIcon {\n  width: 250px;\n  height: 250px;\n}\n.in-construction {\n  pointer-events: none;\n  color: #cdcdcd;\n}\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0VBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDaGluYUN5clwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9jaGluYWN5ci50dGZcIik7XG59XG5cbi5ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogIzUyNTI1MjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWFpbl9zY3JlZW5fYmFja2dyb3VuZC5qcGVnJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogNjAwcHggNjIwcHg7XG4gIGZpbHRlcjogIGJyaWdodG5lc3MoMS4xNSkgc2F0dXJhdGUoMC42KTtcbn1cblxuLmF1dGhvcml6YXRpb25Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuXG4uYXV0aG9yaXphdGlvbkNvbnRhaW5lciBwIGF7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncm91cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW5JY29uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uaW4tY29uc3RydWN0aW9ue1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICNjZGNkY2Q7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4YzhjOGM7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5188:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab1/tab1.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div *ngIf=\"!(isAuthorized | async)\" class=\"authorizationContainer\">\n      <p><a rel=\"noopener noreferrer\" routerLink=\"/registration\">Регистрация</a></p>\n      <p><a rel=\"noopener noreferrer\" routerLink=\"/login\">Вход</a></p>\n    </div>\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tab1_tab1_module_ts.js.map