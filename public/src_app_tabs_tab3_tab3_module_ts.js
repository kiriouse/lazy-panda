"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tab3_tab3_module_ts"],{

/***/ 3559:
/*!**************************************************!*\
  !*** ./src/app/tabs/tab3/tab3-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 7293);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 811:
/*!******************************************!*\
  !*** ./src/app/tabs/tab3/tab3.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 7293);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 3559);
/* harmony import */ var _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab2/tab2-routing.module */ 401);
/* harmony import */ var _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab2/tab2.module */ 4007);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule,
            _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_3__.Tab2PageModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page],
    })
], Tab3PageModule);



/***/ }),

/***/ 7293:
/*!****************************************!*\
  !*** ./src/app/tabs/tab3/tab3.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 6379);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 6947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/crud.service */ 7343);





let Tab3Page = class Tab3Page {
    constructor(crudService) {
        this.crudService = crudService;
        this.meditationHours = 0;
        this.standHours = 0;
        this.stretchHours = 0;
    }
    ngOnInit() {
        this.getStatistics();
    }
    getStatistics() {
        this.crudService
            .getHoursValue('meditation')
            .then((res) => {
            res.subscribe((value) => {
                this.meditationHours = value;
            });
        });
        this.crudService.getHoursValue('stand').then((res) => {
            res.subscribe((value) => {
                this.standHours = value;
            });
        });
        this.crudService
            .getHoursValue('stretch')
            .then((res) => {
            res.subscribe((value) => {
                this.standHours = value;
            });
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_2__.CrudService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 6947:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab3/tab3.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "#container {\n  font-family: \"Helvetica\", sans-serif;\n  text-align: center;\n  height: 100%;\n  color: #525252;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\napp-icon {\n  margin: 4px;\n  width: 100%;\n}\n\n.row {\n  width: 92%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px 0;\n  margin: 5px 0;\n}\n\n.badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  width: 40px;\n  height: 40px;\n  color: white;\n  font-weight: bolder;\n  background-color: orange;\n  margin-left: 80px;\n  margin-bottom: -20px;\n}\n\n.circle {\n  width: 130px;\n  height: 130px;\n  border: 0.5px solid orange;\n  border-radius: 100%;\n  margin-bottom: -135px;\n}\n\n.icon {\n  width: 100px;\n  height: 100px;\n}\n\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbmFwcC1pY29uIHtcbiAgbWFyZ2luOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm93IHtcbiAgd2lkdGg6IDkyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cblxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTEzNXB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 6379:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab3/tab3.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <app-top></app-top>\n  <app-alarm></app-alarm>\n  <div id=\"container\">\n    <div class=\"row\">\n      <app-icon\n        [src]=\"'../../assets/practice-previews/meditation.png'\"\n        routerLink=\"/timer\"\n        [queryParams]=\"{\n          img: '../../assets/practice-previews/meditationTimer.png',\n          title: 'Медитация',\n          subTitle: 'регулярная практика',\n          type: 'meditation',\n          playColor: '#6EC7F5'\n          }\"\n        [hours]=\"meditationHours\"\n        [disabled]=\"false\"\n        title=\"Медитация\"\n        subTitle=\"регулярная практика\"\n      >\n      </app-icon>\n    </div>\n    <br/>\n    <div class=\"row\">\n      <app-icon\n        [src]=\"'../../assets/theory-previews/breath.jpeg'\"\n        routerLink=\"/audio-player\"\n        [queryParams]=\"{\n          link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1296571417&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',\n          title: 'Медитация на развитие концентрации'\n          }\"\n        [hours]=\"1\"\n        [disabled]=\"false\"\n        title=\"Практика\"\n        subTitle=\"дыхательных упражнений\"\n      >\n      </app-icon>\n\n\n      <app-icon [src]=\"'../../assets/theory-previews/breath-2.jpeg'\" [hours]=\"1\" [disabled]=\"false\" title=\"Практика\"\n                subTitle=\"задержки дыхания\"\n                routerLink=\"/chronometer\"\n                [queryParams]=\"{\n                  img: '../../assets/practice-previews/apnea.jpeg',\n                  title: 'Практика',\n                  subTitle: 'задержки дыхания',\n                  type: 'apnea',\n                  playColor: '#6EC7F5'\n          }\"\n      >\n      </app-icon>\n\n\n    </div>\n    <div class=\"row\">\n      <app-icon\n        [src]=\"'../../assets/practice-previews/stand.png'\"\n        routerLink=\"/timer\"\n        [queryParams]=\"{\n          img: '../../assets/practice-previews/standTimer.png',\n          title: 'Столбовое стояние',\n          subTitle: 'регулярная практика',\n          type: 'stand',\n          playColor: '#f56e73'\n          }\"\n        [hours]=\"standHours\"\n        [disabled]=\"false\"\n        title=\"Столбы\"\n        subTitle=\"регулярная практика\">\n\n      </app-icon>\n    </div>\n    <br/>\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tab3_tab3_module_ts.js.map