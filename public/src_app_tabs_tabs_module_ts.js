"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth-guard/auth.guard */ 8455);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tab1_tab1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab1/tab1.module */ 4073)).then((m) => m.Tab1PageModule),
            },
            {
                path: 'tab2',
                canActivateChild: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tab2/tab2.module */ 4007)).then((m) => m.Tab2PageModule),
            },
            {
                path: 'tab3',
                canActivateChild: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tab3_tab3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab3/tab3.module */ 811)).then((m) => m.Tab3PageModule),
            },
            {
                path: 'tab4',
                canActivateChild: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tab4_tab4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab4/tab4.module */ 8066)).then((m) => m.Tab4PageModule),
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2/tab2.module */ 4007);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageModule,
        ],
        exports: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/ionic-auth.service */ 4304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);






let TabsPage = class TabsPage {
    constructor(authService) {
        this.authService = authService;
        this.isUserLoggedIn = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
    }
    ngOnInit() {
        this.isUserLoggedIn = this.authService.isUserLoggedIn();
    }
};
TabsPage.ctorParameters = () => [
    { type: _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n  src: url('chinacyr.ttf');\n}\nion-tab-bar {\n  height: 60px;\n  background-color: #f8f8f8;\n  background-size: 80%;\n}\nion-tab-button {\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n}\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 3px;\n}\nion-tab-button.tab-selected::before {\n  background-color: var(--ion-color-primary);\n}\nion-tab-button > ion-label {\n  font-size: 18px !important;\n  font-family: \"Ninja\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBQUY7QUFFRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsMENBQUE7QUFESjtBQUtBO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtBQUZGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNoaW5hQ3lyXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL2NoaW5hY3lyLnR0ZlwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvY2hpbmFjeXIudHRmXCIpO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICB9XG5cbiAgJi50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmlvbi10YWItYnV0dG9uID4gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk5pbmphXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n    <app-side-menu></app-side-menu>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\" style=\"background-image: url(../../assets/home.svg)\">\n    </ion-tab-button>\n\n    <ion-tab-button [disabled]=\"!(isUserLoggedIn | async)\" tab=\"tab2\" style=\"background-image: url(../../assets/first.svg)\">\n    </ion-tab-button>\n\n    <ion-tab-button [disabled]=\"!(isUserLoggedIn | async)\" tab=\"tab3\" style=\"background-image: url(../../assets/second.svg)\">\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map