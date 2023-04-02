(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_modules_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/modules/audio-player/audio-player.component */ 4927);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ 4680);
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-page/registration-page.component */ 6626);
/* harmony import */ var _tabs_tab3_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tab3/timer/timer.component */ 7794);
/* harmony import */ var _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth-guard/auth.guard */ 8455);
/* harmony import */ var _tabs_tab3_chronometer_chronometer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tab3/chronometer/chronometer.component */ 170);









const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
    },
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login-page_login-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login-page/login-page.module */ 6918)).then((m) => m.LoginPageModule),
            },
        ],
    },
    {
        path: 'registration',
        component: _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationPageComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registration-page_registration-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registration-page/registration-page.module */ 9264)).then((m) => m.RegistrationPageModule),
            },
        ],
    },
    {
        path: 'audio-player',
        component: _shared_modules_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_0__.AudioPlayerComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_modules_audio-player_audio-player-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/modules/audio-player/audio-player-routing.module */ 7329)).then((m) => m.AudioPlayerRoutingModule),
            },
        ],
    },
    {
        path: 'timer',
        component: _tabs_tab3_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__.TimerComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tab3/timer/timer-routing.module */ 1859)).then((m) => m.TimerRoutingModule),
            },
        ],
    },
    {
        path: 'chronometer',
        component: _tabs_tab3_chronometer_chronometer_component__WEBPACK_IMPORTED_MODULE_5__.ChronometerComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tab3_chronometer_chronometer-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tab3/chronometer/chronometer-routing.module */ 6)).then((m) => m.ChronometerRoutingModule),
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules }),
        ],
        providers: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _guides_exercises_six_healing_sounds_six_healing_sounds_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guides/exercises/six-healing-sounds/six-healing-sounds.module */ 263);
/* harmony import */ var _guides_exercises_golden_flower_golden_flower_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides/exercises/golden-flower/golden-flower.module */ 8615);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _shared_modules_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/modules/audio-player/audio-player.module */ 5357);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 3506);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4843);
/* harmony import */ var _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/insomnia/ngx */ 1751);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_tab3_timer_timer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tab3/timer/timer.module */ 6241);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _tabs_tab2_tab2_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/tab2/tab2.module */ 4007);
/* harmony import */ var _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth-guard/auth.guard */ 8455);















// Firebase








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _guides_exercises_six_healing_sounds_six_healing_sounds_module__WEBPACK_IMPORTED_MODULE_2__.SixHealingSoundsModule,
            _guides_exercises_golden_flower_golden_flower_module__WEBPACK_IMPORTED_MODULE_3__.GoldenFlowerModule,
            _shared_modules_audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_5__.AudioPlayerModule,
            _tabs_tab3_timer_timer_module__WEBPACK_IMPORTED_MODULE_10__.TimerModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule,
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__.getFirestore)()),
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.IonicStorageModule.forRoot(),
            _tabs_tab2_tab2_module__WEBPACK_IMPORTED_MODULE_11__.Tab2PageModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy },
            _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__.NativeAudio,
            _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_8__.Insomnia,
            _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8466:
/*!***************************************************************************!*\
  !*** ./src/app/guides/exercises/golden-flower/golden-flower.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoldenFlowerComponent": () => (/* binding */ GoldenFlowerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _golden_flower_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./golden-flower.component.html?ngResource */ 4904);
/* harmony import */ var _golden_flower_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./golden-flower.component.scss?ngResource */ 2860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let GoldenFlowerComponent = class GoldenFlowerComponent {
    constructor() {
        this.showStageOne = false;
        this.showStageTwo = false;
        this.showStageThree = false;
    }
    onHeaderClick(header) {
        switch (header) {
            case 'showStageOne':
                this.showStageOne = !this.showStageOne;
                break;
            case 'showStageTwo':
                this.showStageTwo = !this.showStageTwo;
                break;
            case 'showStageThree':
                this.showStageThree = !this.showStageThree;
                break;
        }
    }
};
GoldenFlowerComponent.ctorParameters = () => [];
GoldenFlowerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-golden-flower',
        template: _golden_flower_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_golden_flower_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoldenFlowerComponent);



/***/ }),

/***/ 8615:
/*!************************************************************************!*\
  !*** ./src/app/guides/exercises/golden-flower/golden-flower.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoldenFlowerModule": () => (/* binding */ GoldenFlowerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _golden_flower_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./golden-flower.component */ 8466);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);







let GoldenFlowerModule = class GoldenFlowerModule {
};
GoldenFlowerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [_golden_flower_component__WEBPACK_IMPORTED_MODULE_0__.GoldenFlowerComponent]
    })
], GoldenFlowerModule);



/***/ }),

/***/ 3256:
/*!*************************************************************************************!*\
  !*** ./src/app/guides/exercises/six-healing-sounds/six-healing-sounds.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SixHealingSoundsComponent": () => (/* binding */ SixHealingSoundsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _six_healing_sounds_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./six-healing-sounds.component.html?ngResource */ 5358);
/* harmony import */ var _six_healing_sounds_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./six-healing-sounds.component.scss?ngResource */ 8557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SixHealingSoundsComponent = class SixHealingSoundsComponent {
    constructor() {
        this.showStageOne = false;
        this.showStageTwo = false;
        this.showStageThree = false;
    }
    onHeaderClick(header) {
        switch (header) {
            case 'showStageOne':
                this.showStageOne = !this.showStageOne;
                break;
            case 'showStageTwo':
                this.showStageTwo = !this.showStageTwo;
                break;
            case 'showStageThree':
                this.showStageThree = !this.showStageThree;
                break;
        }
    }
};
SixHealingSoundsComponent.ctorParameters = () => [];
SixHealingSoundsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-six-healing-sounds',
        template: _six_healing_sounds_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_six_healing_sounds_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SixHealingSoundsComponent);



/***/ }),

/***/ 263:
/*!**********************************************************************************!*\
  !*** ./src/app/guides/exercises/six-healing-sounds/six-healing-sounds.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SixHealingSoundsModule": () => (/* binding */ SixHealingSoundsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _six_healing_sounds_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./six-healing-sounds.component */ 3256);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);







let SixHealingSoundsModule = class SixHealingSoundsModule {
};
SixHealingSoundsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [_six_healing_sounds_component__WEBPACK_IMPORTED_MODULE_0__.SixHealingSoundsComponent]
    })
], SixHealingSoundsModule);



/***/ }),

/***/ 4680:
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.component.html?ngResource */ 5758);
/* harmony import */ var _login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.scss?ngResource */ 374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/ionic-auth.service */ 4304);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 3506);








let LoginPageComponent = class LoginPageComponent {
    constructor(router, ionicAuthService, fb, storage) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.fb = fb;
        this.storage = storage;
        this.successMsg = '';
        this.errorMsg = '';
        this.error_msg = {
            email: [
                {
                    type: 'required',
                    message: 'Provide email.',
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.',
                },
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required.',
                },
                {
                    type: 'minlength',
                    message: 'Password length should be 6 characters long.',
                },
            ],
        };
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
        });
    }
    signIn(value) {
        this.ionicAuthService.signinUser(value).then(() => {
            this.router.navigateByUrl('/tabs/tab2');
        }, (error) => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToSignup() {
        this.router.navigateByUrl('registration');
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
LoginPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login-page',
        template: _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPageComponent);



/***/ }),

/***/ 6626:
/*!******************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageComponent": () => (/* binding */ RegistrationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registration_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-page.component.html?ngResource */ 7286);
/* harmony import */ var _registration_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page.component.scss?ngResource */ 8969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/ionic-auth.service */ 4304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let RegistrationPageComponent = class RegistrationPageComponent {
    constructor(router, ionicAuthService, fb) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.fb = fb;
        this.successMsg = '';
        this.errorMsg = '';
        this.errorMessage = {
            email: [
                {
                    type: 'required',
                    message: 'Provide email.',
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.',
                },
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required.',
                },
                {
                    type: 'minlength',
                    message: 'Password length should be 6 characters long.',
                },
            ],
        };
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
        });
    }
    signUp(value) {
        this.ionicAuthService.createUser(value).then((response) => {
            this.errorMsg = '';
            this.successMsg = 'New user created.';
        }, (error) => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToLogin() {
        this.router.navigateByUrl('login');
    }
};
RegistrationPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RegistrationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registration-page',
        template: _registration_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registration_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrationPageComponent);



/***/ }),

/***/ 8455:
/*!*************************************************!*\
  !*** ./src/app/shared/auth-guard/auth.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ionic-auth.service */ 4304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);






let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivateChild() {
        return this.authService.isUserLoggedIn().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((value) => {
            if (value) {
                console.log(true);
                return true;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => {
            this.router.navigate(['/login']);
            console.log(false);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_0__.IonicAuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 2650:
/*!************************************************************!*\
  !*** ./src/app/shared/components/alarm/alarm.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmComponent": () => (/* binding */ AlarmComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alarm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alarm.component.html?ngResource */ 6113);
/* harmony import */ var _alarm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alarm.component.scss?ngResource */ 7135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AlarmComponent = class AlarmComponent {
    constructor() { }
    ngOnInit() { }
};
AlarmComponent.ctorParameters = () => [];
AlarmComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alarm',
        template: _alarm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alarm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlarmComponent);



/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1933);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goto(link) {
        this.router.navigate([link]);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 2775:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.component.html?ngResource */ 3187);
/* harmony import */ var _icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.component.scss?ngResource */ 4725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let IconComponent = class IconComponent {
    constructor() { }
    ngOnInit() { }
};
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    subTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-icon',
        template: _icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IconComponent);



/***/ }),

/***/ 5020:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuComponent": () => (/* binding */ SideMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _side_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu.component.html?ngResource */ 1178);
/* harmony import */ var _side_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu.component.scss?ngResource */ 8598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ionic-auth.service */ 4304);







let SideMenuComponent = class SideMenuComponent {
    constructor(menu, router, ionicAuthService) {
        this.menu = menu;
        this.router = router;
        this.ionicAuthService = ionicAuthService;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
                this.menu.close('main');
            }
        });
    }
    signOut() {
        this.ionicAuthService
            .signoutUser()
            .then((res) => {
            this.router.navigateByUrl('login');
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService }
];
SideMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-side-menu',
        template: _side_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_side_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SideMenuComponent);



/***/ }),

/***/ 6324:
/*!********************************************************!*\
  !*** ./src/app/shared/components/top/top.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopComponent": () => (/* binding */ TopComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _top_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.component.html?ngResource */ 2212);
/* harmony import */ var _top_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.component.scss?ngResource */ 955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ionic-auth.service */ 4304);
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud.service */ 7343);







let TopComponent = class TopComponent {
    constructor(crudService, authService, cdr, router) {
        this.crudService = crudService;
        this.authService = authService;
        this.cdr = cdr;
        this.router = router;
        this.meditationIsLoading = false;
        this.standIsLoading = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart &&
                (event.url === '/tabs/tab2' || event.url === '/tabs/tab3')) {
                this.getMeditationCount();
                this.getStandHours();
            }
        });
    }
    ngOnInit() {
        this.getMeditationCount();
        this.getStandHours();
    }
    getMeditationCount() {
        this.meditationIsLoading = true;
        this.crudService.getCountValue('meditation', this.authService.uuid).then((res) => {
            res.subscribe((count) => {
                this.meditationCount = count;
                this.meditationIsLoading = false;
            });
            this.cdr.markForCheck();
        }, (err) => {
            this.meditationIsLoading = false;
            console.log(err);
        });
    }
    getStandHours() {
        this.standIsLoading = true;
        this.crudService.getCountValue('stand', this.authService.uuid).then((res) => {
            res.subscribe((count) => {
                this.standCount = count;
                this.standIsLoading = false;
            });
            this.cdr.markForCheck();
        }, (err) => {
            this.standIsLoading = false;
            console.log(err);
        });
    }
};
TopComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService },
    { type: _services_ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
TopComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-top',
        template: _top_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_top_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopComponent);



/***/ }),

/***/ 4927:
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/audio-player/audio-player.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayerComponent": () => (/* binding */ AudioPlayerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _audio_player_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-player.component.html?ngResource */ 522);
/* harmony import */ var _audio_player_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-player.component.scss?ngResource */ 9448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let AudioPlayerComponent = class AudioPlayerComponent {
    constructor(location, route) {
        this.location = location;
        this.route = route;
        this.title = '';
        this.src = '';
    }
    ngOnInit() {
        this.title = this.route.snapshot.queryParamMap.get('title');
        this.src = this.route.snapshot.queryParamMap.get('link');
    }
    goBack() {
        this.location.back();
    }
    play($event) {
        console.log('test');
    }
};
AudioPlayerComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
AudioPlayerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-audio-player',
        template: _audio_player_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_audio_player_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AudioPlayerComponent);



/***/ }),

/***/ 5357:
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/audio-player/audio-player.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayerModule": () => (/* binding */ AudioPlayerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _audio_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-player.component */ 4927);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 4466);
/* harmony import */ var _tabs_tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tabs/tab2/tab2-routing.module */ 401);
/* harmony import */ var _pipes_save_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/save.pipe */ 8125);









let AudioPlayerModule = class AudioPlayerModule {
};
AudioPlayerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _tabs_tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_audio_player_component__WEBPACK_IMPORTED_MODULE_0__.AudioPlayerComponent, _pipes_save_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe],
        exports: [_pipes_save_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe]
    })
], AudioPlayerModule);



/***/ }),

/***/ 8125:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/save.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ 7343:
/*!*************************************************!*\
  !*** ./src/app/shared/services/crud.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudService": () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _ionic_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-auth.service */ 4304);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 3506);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);






let CrudService = class CrudService {
    constructor(firestore, authService, storage) {
        this.firestore = firestore;
        this.authService = authService;
        this.storage = storage;
        this.uid = '';
        storage.get('uid').then((uid) => {
            this.uid = uid;
            this.progressInTime = firestore.collection(`user/${uid}/progress-in-time`);
            this.firestore
                .doc(`user/${uid}/progress-in-time/meditation`)
                .get()
                .subscribe((doc) => {
                if (!doc.exists) {
                    this.progressInTime.doc('meditation').set({ time: 0, count: 0 });
                }
            });
            this.firestore
                .doc(`user/${uid}/progress-in-time/stand`)
                .get()
                .subscribe((doc) => {
                if (!doc.exists) {
                    this.progressInTime.doc('stand').set({ time: 0, count: 0 });
                }
            });
        });
    }
    getHoursValue(typeOfActivity) {
        return this.storage.get('uid').then((uid) => {
            this.uid = uid;
            this.progressInTime = this.firestore.collection(`user/${uid}/progress-in-time`);
            return this.progressInTime
                .doc(typeOfActivity)
                .get()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
                return data.data()?.time && data.data()?.time / 60 / 60 > 1
                    ? Math.floor(data.data().time / 60 / 60)
                    : 0;
            }));
        });
    }
    getCountValue(practiceType, uuid) {
        return this.storage.get('uid').then((uid) => {
            this.uid = uid;
            if (uuid) {
                this.progressInTime = this.firestore.collection(`user/${uuid}/progress-in-time`);
            }
            else {
                this.progressInTime = this.firestore.collection(`user/${uid}/progress-in-time`);
            }
            return this.progressInTime
                .doc(practiceType)
                .get()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
                return data.data().count ? data.data().count : 0;
            }));
        });
    }
    update(seconds, practiceType) {
        this.progressInTime
            .doc(practiceType)
            .get()
            .subscribe((data) => {
            const dbTimeValue = data.data().time;
            const dbCountValue = data.data().count;
            const newTimeValue = dbTimeValue + seconds;
            let newCountValue = dbCountValue;
            // if (seconds > 300) {
            newCountValue ? newCountValue++ : (newCountValue = 1);
            // }
            this.progressInTime
                .doc(practiceType)
                .update({ time: newTimeValue, count: newCountValue })
                .then(() => console.log('success'), (err) => console.log(err));
        });
    }
    getCollection(docPath) {
        return this.firestore
            .collection(`user/${this.uid}/progress-in-time`)
            .doc(`user/${this.uid}/progress-in-time/${docPath}`);
    }
};
CrudService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _ionic_auth_service__WEBPACK_IMPORTED_MODULE_0__.IonicAuthService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
CrudService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], CrudService);



/***/ }),

/***/ 7841:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/data-convert.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataConvertService": () => (/* binding */ DataConvertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DataConvertService = class DataConvertService {
    constructor() { }
    secondsToString(n) {
        const sec_num = parseInt(n.toString(), 10); // don't forget the second param
        let hours = Math.floor(sec_num / 3600).toString();
        let minutes = Math.floor((sec_num - Number(hours) * 3600) / 60).toString();
        let seconds = (sec_num -
            Number(hours) * 3600 -
            Number(minutes) * 60).toString();
        if (Number(hours) < 10) {
            hours = '0' + hours;
        }
        if (Number(minutes) < 10) {
            minutes = '0' + minutes;
        }
        if (Number(seconds) < 10) {
            seconds = '0' + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    }
    getSeconds(s) {
        const a = s.split(':');
        return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    }
};
DataConvertService.ctorParameters = () => [];
DataConvertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], DataConvertService);



/***/ }),

/***/ 4304:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/ionic-auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicAuthService": () => (/* binding */ IonicAuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 3506);





let IonicAuthService = class IonicAuthService {
    constructor(angularFireAuth, storage) {
        this.angularFireAuth = angularFireAuth;
        this.storage = storage;
        this.uuid = '';
    }
    createUser(value) {
        return new Promise((resolve, reject) => {
            this.angularFireAuth
                .createUserWithEmailAndPassword(value.email, value.password)
                .then((res) => resolve(res), (err) => reject(err));
        });
    }
    signinUser(value) {
        return new Promise((resolve, reject) => {
            this.angularFireAuth
                .signInWithEmailAndPassword(value.email, value.password)
                .then((res) => {
                this.uuid = res.user.uid;
                this.storage.set('uid', res.user.uid);
                resolve(res);
            }, (err) => reject(err));
        });
    }
    signoutUser() {
        return new Promise((resolve, reject) => {
            if (this.angularFireAuth.currentUser) {
                this.angularFireAuth
                    .signOut()
                    .then(() => {
                    this.storage.clear();
                    resolve();
                })
                    .catch(() => {
                    reject();
                });
            }
        });
    }
    isUserLoggedIn() {
        return this.angularFireAuth.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            console.log(Boolean(user));
            return Boolean(user);
        }));
    }
    userInfo() {
        return this.angularFireAuth.user;
    }
};
IonicAuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
IonicAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], IonicAuthService);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer/footer.component */ 6526);






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ],
        declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
        exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
    })
], SharedModule);



/***/ }),

/***/ 401:
/*!**************************************************!*\
  !*** ./src/app/tabs/tab2/tab2-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 2044);
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/icon/icon.component */ 2775);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/top/top.component */ 6324);
/* harmony import */ var _shared_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/alarm/alarm.component */ 2650);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);









const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    },
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule],
        declarations: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_2__.TopComponent, _shared_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_3__.AlarmComponent],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_2__.TopComponent, _shared_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_3__.AlarmComponent],
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4007:
/*!******************************************!*\
  !*** ./src/app/tabs/tab2/tab2.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 2044);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2-routing.module */ 401);
/* harmony import */ var _shared_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/side-menu/side-menu.component */ 5020);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page, _shared_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__.SideMenuComponent],
        exports: [_shared_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__.SideMenuComponent],
    })
], Tab2PageModule);



/***/ }),

/***/ 2044:
/*!****************************************!*\
  !*** ./src/app/tabs/tab2/tab2.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1503);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 8942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tab2Page = class Tab2Page {
    constructor() { }
    ngOnInit() { }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 170:
/*!****************************************************************!*\
  !*** ./src/app/tabs/tab3/chronometer/chronometer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChronometerComponent": () => (/* binding */ ChronometerComponent)
/* harmony export */ });
/* harmony import */ var _Users_morozovkirill_MyApps_lazy_panda_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chronometer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chronometer.component.html?ngResource */ 8990);
/* harmony import */ var _chronometer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chronometer.component.scss?ngResource */ 7684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/crud.service */ 7343);
/* harmony import */ var _shared_services_data_convert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/data-convert.service */ 7841);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4843);
/* harmony import */ var _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/insomnia/ngx */ 1751);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 3506);















let ChronometerComponent = class ChronometerComponent {
  constructor(location, route, pickerCtrl, crudService, dataConvertService, nativeAudio, insomnia, cdr, storage) {
    this.location = location;
    this.route = route;
    this.pickerCtrl = pickerCtrl;
    this.crudService = crudService;
    this.dataConvertService = dataConvertService;
    this.nativeAudio = nativeAudio;
    this.insomnia = insomnia;
    this.cdr = cdr;
    this.storage = storage;
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.value_ = 0;
    this.buffer_ = 0;
    this.timerValue = '00:00:00';
    this.progressbarVisible = false;
    this.secondsCounter = 0;
    this.timerEnd = 0;
    this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(0, 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.stop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(_ => this.value_ < 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => this.saveHoursToDB()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => {
      this.secondsCounter++;
      this.value_ = this.value_ + this.timerEnd;
      this.timerValue = this.dataConvertService.secondsToString(this.dataConvertService.getSeconds(this.timerValue) - 1);

      if (this.timerValue === '00:00:00') {
        this.progressbarVisible = false;
      }

      return this.value_;
    }));
  }

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.img = this.route.snapshot.queryParamMap.get('img');
    this.subTitle = this.route.snapshot.queryParamMap.get('subTitle');
    this.getPickerValue(this.type);
    setTimeout(() => {
      this.nativeAudio.preloadComplex('ring', 'assets/mp3/tibetan-bell-sound.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.setVolumeForComplexAsset('ring', 0.9).then(res => console.log(res), err => console.log(err));
      }, err => {
        console.log(err);
      });
    }, 3000);
  }

  getPickerValue(typeOfActivity) {
    this.storage.get(`${typeOfActivity}TimerValue`).then(value => {
      value ? this.timerValue = value : this.timerValue = '00:00:00';
    });
  }

  goBack() {
    this.cdr.detectChanges();
    this.location.back();
  }

  openPicker() {
    var _this = this;

    return (0,_Users_morozovkirill_MyApps_lazy_panda_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hours = [];
      const minutes = [];
      const seconds = [];

      for (let i = 0; i <= 24; i++) {
        i < 10 ? hours.push({
          text: `0${i}`,
          value: i
        }) : hours.push({
          text: `${i}`,
          value: i
        });
      }

      for (let i = 0; i <= 60; i++) {
        i < 10 ? minutes.push({
          text: `0${i}`,
          value: i
        }) : minutes.push({
          text: `${i}`,
          value: i
        });
      }

      for (let i = 0; i <= 60; i++) {
        i < 10 ? seconds.push({
          text: `0${i}`,
          value: i
        }) : seconds.push({
          text: `${i}`,
          value: i
        });
      }

      const picker = yield _this.pickerCtrl.create({
        columns: [{
          name: 'hours',
          options: hours,
          selectedIndex: _this.getColumnValue(0)
        }, {
          name: 'minutes',
          options: minutes,
          selectedIndex: _this.getColumnValue(1)
        }, {
          name: 'seconds',
          options: seconds,
          selectedIndex: _this.getColumnValue(2)
        }],
        buttons: [{
          text: 'Отменить',
          role: 'cancel'
        }, {
          text: 'Подтвердить',
          handler: value => {
            _this.timerValue = `${value.hours.text}:${value.minutes.text}:${value.seconds.text}`;
          }
        }]
      });
      yield picker.present();
    })();
  }

  getColumnValue(i) {
    return Number(this.timerValue.split(':')[i]);
  }

  play() {
    this.progressbarVisible = true;
    this.timerEnd = 1 / this.dataConvertService.getSeconds(this.timerValue);
    this.storage.set(`${this.type}TimerValue`, this.timerValue);
    this.insomnia.keepAwake().then(() => console.log('success'), () => console.log('error'));
  }

  stop() {
    this.progressbarVisible = false;
    this.getPickerValue(this.type);
    this.insomnia.allowSleepAgain().then(() => console.log('success'), () => console.log('error'));
  }

  saveHoursToDB() {
    this.crudService.update(this.secondsCounter, this.type);
    this.buffer_ = 0;
    this.value_ = 0;
    this.secondsCounter = 0;
    this.progressbarVisible = false;
    this.nativeAudio.play('ring', () => console.log('ring is done playing'));
    this.insomnia.allowSleepAgain().then(res => console.log(res), err => console.log(err));
  }

};

ChronometerComponent.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.PickerController
}, {
  type: _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService
}, {
  type: _shared_services_data_convert_service__WEBPACK_IMPORTED_MODULE_4__.DataConvertService
}, {
  type: _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeAudio
}, {
  type: _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_6__.Insomnia
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage
}];

ChronometerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-chronometer',
  template: _chronometer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_chronometer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ChronometerComponent);


/***/ }),

/***/ 1859:
/*!*********************************************************!*\
  !*** ./src/app/tabs/tab3/timer/timer-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerRoutingModule": () => (/* binding */ TimerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.component */ 7794);




const routes = [
    {
        path: '',
        component: _timer_component__WEBPACK_IMPORTED_MODULE_0__.TimerComponent,
    },
];
let TimerRoutingModule = class TimerRoutingModule {
};
TimerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerRoutingModule);



/***/ }),

/***/ 7794:
/*!****************************************************!*\
  !*** ./src/app/tabs/tab3/timer/timer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var _Users_morozovkirill_MyApps_lazy_panda_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.component.html?ngResource */ 4535);
/* harmony import */ var _timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.component.scss?ngResource */ 8059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/crud.service */ 7343);
/* harmony import */ var _shared_services_data_convert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/data-convert.service */ 7841);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4843);
/* harmony import */ var _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/insomnia/ngx */ 1751);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 3506);















let TimerComponent = class TimerComponent {
  constructor(location, route, pickerCtrl, crudService, dataConvertService, nativeAudio, insomnia, cdr, storage) {
    this.location = location;
    this.route = route;
    this.pickerCtrl = pickerCtrl;
    this.crudService = crudService;
    this.dataConvertService = dataConvertService;
    this.nativeAudio = nativeAudio;
    this.insomnia = insomnia;
    this.cdr = cdr;
    this.storage = storage;
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.value_ = 0;
    this.buffer_ = 0;
    this.timerValue = '00:00:00';
    this.progressbarVisible = false;
    this.secondsCounter = 0;
    this.timerEnd = 0;
    this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(0, 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.stop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(_ => this.value_ < 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => this.saveHoursToDB()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => {
      this.secondsCounter++;
      this.value_ = this.value_ + this.timerEnd;
      this.timerValue = this.dataConvertService.secondsToString(this.dataConvertService.getSeconds(this.timerValue) - 1);

      if (this.timerValue === '00:00:00') {
        this.progressbarVisible = false;
      }

      return this.value_;
    }));
  }

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.img = this.route.snapshot.queryParamMap.get('img');
    this.subTitle = this.route.snapshot.queryParamMap.get('subTitle');
    this.getPickerValue(this.type);
    setTimeout(() => {
      this.nativeAudio // .preloadComplex('ring', 'assets/mp3/tibetan-bell-sound.mp3', 1, 1, 0)
      .preloadComplex('ring', 'tibetan-bell-sound.mp3', 1, 1, 0).then(() => {
        this.nativeAudio.setVolumeForComplexAsset('ring', 0.9).then(res => console.log(res), err => console.log(err));
      }, err => {
        console.log(err);
      });
    }, 3000);
  }

  getPickerValue(typeOfActivity) {
    this.storage.get(`${typeOfActivity}TimerValue`).then(value => {
      value ? this.timerValue = value : this.timerValue = '00:00:00';
    });
  }

  goBack() {
    this.cdr.detectChanges();
    this.location.back();
  }

  openPicker() {
    var _this = this;

    return (0,_Users_morozovkirill_MyApps_lazy_panda_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hours = [];
      const minutes = [];
      const seconds = [];

      for (let i = 0; i <= 24; i++) {
        i < 10 ? hours.push({
          text: `0${i}`,
          value: i
        }) : hours.push({
          text: `${i}`,
          value: i
        });
      }

      for (let i = 0; i <= 60; i++) {
        i < 10 ? minutes.push({
          text: `0${i}`,
          value: i
        }) : minutes.push({
          text: `${i}`,
          value: i
        });
      }

      for (let i = 0; i <= 60; i++) {
        i < 10 ? seconds.push({
          text: `0${i}`,
          value: i
        }) : seconds.push({
          text: `${i}`,
          value: i
        });
      }

      const picker = yield _this.pickerCtrl.create({
        columns: [{
          name: 'hours',
          options: hours,
          selectedIndex: _this.getColumnValue(0)
        }, {
          name: 'minutes',
          options: minutes,
          selectedIndex: _this.getColumnValue(1)
        }, {
          name: 'seconds',
          options: seconds,
          selectedIndex: _this.getColumnValue(2)
        }],
        buttons: [{
          text: 'Отменить',
          role: 'cancel'
        }, {
          text: 'Подтвердить',
          handler: value => {
            _this.timerValue = `${value.hours.text}:${value.minutes.text}:${value.seconds.text}`;
          }
        }]
      });
      yield picker.present();
    })();
  }

  getColumnValue(i) {
    return Number(this.timerValue.split(':')[i]);
  }

  play() {
    this.progressbarVisible = true;
    this.timerEnd = 1 / this.dataConvertService.getSeconds(this.timerValue);
    this.storage.set(`${this.type}TimerValue`, this.timerValue);
    this.insomnia.keepAwake().then(() => console.log('success'), () => console.log('error'));
  }

  stop() {
    this.progressbarVisible = false;
    this.getPickerValue(this.type);
    this.insomnia.allowSleepAgain().then(() => console.log('success'), () => console.log('error'));
  }

  saveHoursToDB() {
    this.crudService.update(this.secondsCounter, this.type);
    this.buffer_ = 0;
    this.value_ = 0;
    this.secondsCounter = 0;
    this.progressbarVisible = false;
    this.nativeAudio.play('ring', () => console.log('ring is done playing'));
    this.insomnia.allowSleepAgain().then(res => console.log(res), err => console.log(err));
  }

};

TimerComponent.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.PickerController
}, {
  type: _shared_services_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService
}, {
  type: _shared_services_data_convert_service__WEBPACK_IMPORTED_MODULE_4__.DataConvertService
}, {
  type: _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeAudio
}, {
  type: _awesome_cordova_plugins_insomnia_ngx__WEBPACK_IMPORTED_MODULE_6__.Insomnia
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage
}];

TimerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-timer',
  template: _timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TimerComponent);


/***/ }),

/***/ 6241:
/*!*************************************************!*\
  !*** ./src/app/tabs/tab3/timer/timer.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerModule": () => (/* binding */ TimerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-routing.module */ 1859);
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.component */ 7794);
/* harmony import */ var _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tab2/tab2-routing.module */ 401);








let TimerModule = class TimerModule {
};
TimerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerRoutingModule,
            _tab2_tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
        ],
        declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_1__.TimerComponent],
    })
], TimerModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDNqSLFrwNWUWdCeBSVlvBhVVHI7iHggBM',
        authDomain: 'lazy-panda-3a752.firebaseapp.com',
        projectId: 'lazy-panda-3a752',
        storageBucket: 'lazy-panda-3a752.appspot.com',
        messagingSenderId: '761910245415',
        appId: '1:761910245415:web:dcdd9fcb8e76cfff4d3602'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  ion-app {\n    margin-top: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZ0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICBpb24tYXBwIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 2860:
/*!****************************************************************************************!*\
  !*** ./src/app/guides/exercises/golden-flower/golden-flower.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n}\n.group {\n  text-align: left;\n}\n#container {\n  font-family: \"ChinaCyr\", sans-serif;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n  height: auto;\n}\n.group-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.mainIcon {\n  border-radius: 50%;\n  width: 250px;\n  height: 250px;\n  border: 1px solid #a1897a;\n}\n.in-construction {\n  pointer-events: none;\n  color: #cdcdcd;\n}\nh1 {\n  font-size: 32px;\n  margin: 6px 0 3px 0;\n}\n#container li, p {\n  font-size: 18px;\n  color: #5c5c5c;\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGRlbi1mbG93ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJnb2xkZW4tZmxvd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNoaW5hQ3lyXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2NoaW5hY3lyLnR0ZlwiKTtcbn1cblxuLmdyb3VwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNoaW5hQ3lyXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZ3JvdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluSWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTE4OTdhO1xufVxuXG4uaW4tY29uc3RydWN0aW9ue1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICNjZGNkY2Q7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW46IDZweCAwIDNweCAwO1xufVxuXG4jY29udGFpbmVyIGxpLCBwe1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNWM1YzVjO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 8557:
/*!**************************************************************************************************!*\
  !*** ./src/app/guides/exercises/six-healing-sounds/six-healing-sounds.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n}\n.group {\n  text-align: left;\n}\n#container {\n  font-family: \"ChinaCyr\", sans-serif;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n  height: auto;\n}\n.group-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.mainIcon {\n  border-radius: 50%;\n  width: 250px;\n  height: 250px;\n  border: 1px solid #a1897a;\n}\n.in-construction {\n  pointer-events: none;\n  color: #cdcdcd;\n}\nh1 {\n  font-size: 32px;\n  margin: 6px 0 3px 0;\n}\n#container li, p {\n  font-size: 18px;\n  color: #5c5c5c;\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpeC1oZWFsaW5nLXNvdW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InNpeC1oZWFsaW5nLXNvdW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDaGluYUN5clwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9jaGluYWN5ci50dGZcIik7XG59XG5cbi5ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJDaGluYUN5clwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjNTI1MjUyO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmdyb3VwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbkljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ExODk3YTtcbn1cblxuLmluLWNvbnN0cnVjdGlvbntcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjY2RjZGNkO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luOiA2cHggMCAzcHggMDtcbn1cblxuI2NvbnRhaW5lciBsaSwgcHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzVjNWM1YztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 374:
/*!*****************************************************************!*\
  !*** ./src/app/login-page/login-page.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@font-face {\n  font-family: \"ChinaCyr\";\n  src: url('chinacyr.ttf');\n}\n#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: \"ChinaCyr\", sans-serif;\n  text-align: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n}\n.icon {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 30px;\n}\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n#container a {\n  text-decoration: none;\n}\n#container strong {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2hpbmFDeXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvY2hpbmFjeXIudHRmXCIpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkNoaW5hQ3lyXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogIzUyNTI1MjtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 8969:
/*!*******************************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: Helvetica, sans-serif;\n  text-align: center;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n}\n\n.icon {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 30px;\n}\n\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container strong {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogIzUyNTI1MjtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 7135:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/alarm/alarm.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "img {\n  position: fixed;\n  top: 10%;\n  right: 0;\n  width: 100px;\n  z-index: 999;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  img {\n    top: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYWxhcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICBpbWcge1xuICAgIHRvcDogMTUlO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 434:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".footer {\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.button {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.one {\n  background: #efefef center no-repeat url('first.svg');\n  background-size: 20%;\n}\n\n.two {\n  background: #efefef center no-repeat url('second.svg');\n  background-size: 20%;\n}\n\n.three {\n  background: #efefef center no-repeat url('third.svg');\n  background-size: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFEQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLHNEQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLHFEQUFBO0VBQ0Esb0JBQUE7QUFFRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ub25lIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZiBjZW50ZXIgbm8tcmVwZWF0IHVybCguLi8uLi8uLi8uLi9hc3NldHMvZmlyc3Quc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG59XG5cbi50d28ge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmIGNlbnRlciBuby1yZXBlYXQgdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9zZWNvbmQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG59XG5cbi50aHJlZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWYgY2VudGVyIG5vLXJlcGVhdCB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3RoaXJkLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xufVxuIl19 */";

/***/ }),

/***/ 4725:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\n.badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  height: 20px;\n  color: black;\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 2px 5px;\n}\n\n.badge-label {\n  font-size: 12px;\n  margin-right: 7px;\n}\n\n.preview {\n  border-radius: 7%;\n}\n\n.badge-disabled {\n  background-color: #dadada;\n}\n\n.preview-disabled {\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n\n.titleContainer {\n  text-align: left;\n  width: 100%;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: Arial, sans-serif;\n  margin: 10px 0 0 0;\n}\n\n.title-disabled {\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n\n.subtitle {\n  font-size: 14px;\n  font-family: Arial, sans-serif;\n  font-weight: lighter;\n  margin: 0;\n}\n\n.subtitle-disabled {\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUZGIiwiZmlsZSI6Imljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi5iYWRnZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5wcmV2aWV3IHtcbiAgYm9yZGVyLXJhZGl1czogNyU7XG59XG5cbi5iYWRnZS1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59XG5cblxuLnByZXZpZXctZGlzYWJsZWQge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4udGl0bGVDb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXG59XG5cbi50aXRsZS1kaXNhYmxlZCB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3VidGl0bGUtZGlzYWJsZWQge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4iXX0= */";

/***/ }),

/***/ 8598:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 955:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/top/top.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".top {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 50px;\n  border-bottom: 2px solid #dadada;\n  margin-bottom: 20px;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n}\n\n.label {\n  margin-left: 5px;\n  font-weight: bolder;\n}\n\n.icon {\n  width: 31px;\n  height: 31px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoidG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RhZGFkYTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cblxuLmljb24ge1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzMXB4O1xufVxuIl19 */";

/***/ }),

/***/ 9448:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/audio-player/audio-player.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".group {\n  text-align: left;\n}\n\n.exit {\n  cursor: pointer;\n  font-size: 18px;\n  font-family: Helvetica, sans-serif;\n}\n\n.top {\n  margin-top: -20px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.play {\n  position: fixed;\n  top: 70%;\n  left: 20px;\n  padding: 0 0 20px 20px;\n  cursor: pointer;\n  background-color: #ffffff;\n  opacity: 0.6;\n}\n\n.play-text {\n  font-family: Helvetica, sans-serif;\n  font-weight: lighter;\n  color: black;\n  font-size: 40px;\n}\n\nion-content {\n  --ion-background-color: #ffffff;\n  --overflow: hidden ;\n}\n\nion-footer, ion-toolbar, ion-row, ion-col {\n  --ion-background-color: orange;\n}\n\n#container {\n  font-family: Helvetica, sans-serif;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #525252;\n  padding: 30px 20px;\n  font-size: 30px;\n  line-height: 26px;\n  height: auto;\n}\n\n.group-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\n.mainIcon {\n  border-radius: 50%;\n  width: 250px;\n  height: 250px;\n  border: 1px solid #a1897a;\n}\n\n.in-construction {\n  pointer-events: none;\n  color: #cdcdcd;\n}\n\nh1 {\n  font-size: 32px;\n  margin: 6px 0 3px 0;\n}\n\n#container li, p {\n  font-size: 18px;\n  color: #5c5c5c;\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmV4aXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRvcCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnBsYXktdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtLW92ZXJmbG93OiBoaWRkZW5cbn1cblxuaW9uLWZvb3RlciwgaW9uLXRvb2xiYXIsIGlvbi1yb3csIGlvbi1jb2wge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbiNjb250YWluZXIge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjNTI1MjUyO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmdyb3VwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbkljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ExODk3YTtcbn1cblxuLmluLWNvbnN0cnVjdGlvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogI2NkY2RjZDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbjogNnB4IDAgM3B4IDA7XG59XG5cbiNjb250YWluZXIgbGksIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNWM1YzVjO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 8942:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab2/tab2.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  font-family: \"Helvetica\", sans-serif;\n  text-align: center;\n  height: 100%;\n  color: #525252;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -30px;\n}\n\napp-icon {\n  margin: 4px;\n  width: 100%;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n\n.row {\n  width: 92%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px 0;\n  margin: 5px 0;\n}\n\n.badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  width: 40px;\n  height: 40px;\n  color: white;\n  font-weight: bolder;\n  background-color: orange;\n  margin-left: 80px;\n  margin-bottom: -20px;\n}\n\n.circle {\n  width: 130px;\n  height: 130px;\n  border: 0.5px solid orange;\n  border-radius: 100%;\n  margin-bottom: -135px;\n}\n\n.icon {\n  width: 100px;\n  height: 100px;\n}\n\n#container p {\n  font-size: 16px;\n  color: #8c8c8c;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREYiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzUyNTI1MjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbmFwcC1pY29uIHtcbiAgbWFyZ2luOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXktY3VzdG9tLW1lbnUge1xuICAtLXdpZHRoOiA1MDBweDtcbn1cblxuLnJvdyB7XG4gIHdpZHRoOiA5MiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG59XG5cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IC0xMzVweDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4iXX0= */";

/***/ }),

/***/ 7684:
/*!*****************************************************************************!*\
  !*** ./src/app/tabs/tab3/chronometer/chronometer.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 0;\n}\n\n.exit {\n  color: black;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.top {\n  padding: 10px 20px;\n}\n\n.title-container {\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.titles {\n  position: absolute;\n  left: 30px;\n  margin-top: 20px;\n}\n\n.titles p {\n  margin: 0;\n  color: white;\n  filter: drop-shadow(1px 1px 3px #858585);\n}\n\n.subtitle {\n  filter: drop-shadow(1px 1px 1px #000000);\n}\n\n.timer {\n  margin: 20px 0;\n  width: 100%;\n  text-align: center;\n  font-size: 70px;\n  font-weight: lighter;\n  color: grey;\n}\n\n.description {\n  margin: 20px;\n  font-weight: lighter;\n}\n\n.buttons-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n\n.stop-button, .play-button {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0;\n}\n\n.stop-button img, .play-button img {\n  width: 110px;\n  height: 110px;\n}\n\n.pick-button {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0;\n}\n\n.pick-button img {\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocm9ub21ldGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFERTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFHSjs7QUFDQTtFQUVFLHdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBREE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0oiLCJmaWxlIjoiY2hyb25vbWV0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmV4aXQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG9wIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjODU4NTg1KTtcbiAgfVxuXG59XG4uc3VidGl0bGUge1xuICAvL2ZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4ICMwMDAwMDApO1xufVxuLnRpbWVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiBncmV5O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zdG9wLWJ1dHRvbiwgLnBsYXktYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG59XG5cbi5waWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 8059:
/*!*****************************************************************!*\
  !*** ./src/app/tabs/tab3/timer/timer.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 0;\n}\n\n.exit {\n  color: black;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.top {\n  padding: 10px 20px;\n}\n\n.title-container {\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.titles {\n  position: absolute;\n  left: 30px;\n  margin-top: 20px;\n}\n\n.titles p {\n  margin: 0;\n  color: white;\n  filter: drop-shadow(1px 1px 3px #858585);\n}\n\n.subtitle {\n  filter: drop-shadow(1px 1px 1px #000000);\n}\n\n.timer {\n  margin: 20px 0;\n  width: 100%;\n  text-align: center;\n  font-size: 70px;\n  font-weight: lighter;\n  color: grey;\n}\n\n.description {\n  margin: 20px;\n  font-weight: lighter;\n}\n\n.buttons-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n\n.stop-button, .play-button {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0;\n}\n\n.stop-button img, .play-button img {\n  width: 110px;\n  height: 110px;\n}\n\n.pick-button {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0;\n}\n\n.pick-button img {\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFERTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFHSjs7QUFDQTtFQUVFLHdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBREE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0oiLCJmaWxlIjoidGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmV4aXQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG9wIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjODU4NTg1KTtcbiAgfVxuXG59XG4uc3VidGl0bGUge1xuICAvL2ZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4ICMwMDAwMDApO1xufVxuLnRpbWVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiBncmV5O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zdG9wLWJ1dHRvbiwgLnBsYXktYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG59XG5cbi5waWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet>\n\n  </ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 4904:
/*!****************************************************************************************!*\
  !*** ./src/app/guides/exercises/golden-flower/golden-flower.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n\n\n  <div id=\"container\">\n    <h1><b>Тайна</b></h1>\n    <h1><b>золотого</b></h1>\n    <h1><b>цветка</b></h1>\n    <p>Медитация мастера Лю Цу</p>\n\n    <br>\n    <br>\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageOne')\">\n        <h4>1-й этап</h4>\n        <ion-icon *ngIf=\"showStageOne\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageOne\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageOne\">\n        <ol>\n          <li>Практикуйте Хранение Одного. Сначала на короткое время сфокусируйтесь на точке перед собой. Затем скосите\n            глаза и на минуту или две сфокусируйте их на кончике носа, после чего также на минуту или две перенесите\n            точку фокусировки на две трети длины носа вверх, на бугорок. Затем переместите точку фокусировки и\n            сконцентрируйтесь на точке между глазами и оставьте ее там на минуту или две.\n          </li>\n          <li>Закройте глаза.</li>\n          <li>Используйте свое воображение или силу визуализации для того, чтобы представить прямо перед своими глазами\n            солнце, если вы делаете это днем, или луну, если ночью. У этого солнца или луны улыбающееся лицо, и\n            улыбается оно прямо вам в глаза. Если вам будет легче, можете представить улыбающееся лицо любимого\n            человека.\n          </li>\n          <li>Направьте исходящую от солнца, луны или любимого человека энергию улыбки. Она направлена во внешний угол\n            левого глаза. Почувствуйте, как уголок вашего левого глаза начинает расслабляться и улыбаться.\n          </li>\n          <li>Поднимите левый уголок вашего рта в улыбке. Почувствуйте взаимосвязь между улыбающимся левым уголком\n            вашего рта и улыбающимся внешним уголком вашего левого глаза. Почувствуйте, как левая половина вашего лица\n            как бы воспряла и расслабилась.\n          </li>\n          <li>Повторите ту же процедуру для внешнего уголка вашего правого глаза и правого уголка рта.</li>\n          <li>Направьте улыбку во внутренний утолок левого глаза.</li>\n          <li>Повторите то же самое для внутреннего уголка правого глаза.</li>\n          <li>Переведите энергию улыбки от солнца или луны в зрачок глаза и почувствуйте, как он наполняется энергией.\n          </li>\n          <li>Повторите то же самое для правого зрачка и почувствуйте, как он наполняется энергией улыбки.</li>\n          <li>Переведите энергию улыбки в радужную оболочку левого глаза и почувствуйте, как она наполняется энергией\n            улыбки. Глубоко вдохните, как при Брюшном Дыхании, затем выдохните и втяните мышцу радужки, одновременно\n            втягивая анус для того, чтобы помочь себе почувствовать и активизировать радужную оболочку глаза. Вдохните и\n            расслабьтесь.\n          </li>\n          <li>Повторите то же самое для радужной оболочки правого глаза, выдохните и натяните мышцу радужки,\n            одновременно втягивая анус. Вдохните и расслабьтесь.\n          </li>\n          <li>Направьте улыбку во всю белую часть левого глаза, как снаружи, так и внутри, почувствуйте, как все глазное\n            яблоко наполняется энергией улыбки.\n          </li>\n          <li>Повторите то же самое для белка и внутренней части правого глаза.</li>\n          <li>Направьте улыбку в верхнее веко левого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в верхнее веко правого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в нижнее веко левого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в нижнее веко правого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Держите глаза закрытыми и сосредоточьте свое сознание на кончике носа.</li>\n          <li>Перенесите сначала свое сознание на бугорок на носу, а затем на Третий Глаз.</li>\n          <li>Направьте улыбку в Третий Глаз. Переведите энергию улыбки солнца, если на дворе день, луны, если на дворе\n            ночь, или улыбающегося лица любимого человека в область Третьего Глаза. Почувствуйте, как эта область\n            расслабляется по мере наполнения энергией.\n          </li>\n          <li>Переведите энергию улыбки в голову. Представьте себе, что ваш взгляд начинается на кончике носа, идет\n            вверх через бугорок в Третий Глаз и углубляется на 3 дюйма дальше в мозг. Мысленно оставайтесь там в течение\n            нескольких минут. Понаблюдайте за своими мыслями или просто посидите тихо.\n          </li>\n          <li>Разотрите руки и сделайте массаж лица, накройте глаза ладонями и перед тем, как открыть глаза, несколько\n            секунд впитывайте тепло.\n          </li>\n        </ol>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageTwo')\">\n        <h4>2-й этап</h4>\n        <ion-icon *ngIf=\"showStageTwo\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageTwo\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageTwo\">\n        <ol>\n          <li>Повторите упражнение Золотого Цветка до того места, где вы направляли улыбку в различные части глаз и\n            связывали эту улыбку с улыбкой поднятых уголков губ. Если вы связали внешние и внутренние уголки глаз,\n            зрачки, радужки, белки и верхние и нижние веки, то вы готовы приступить к дальнейшим этапам упражнения.\n          </li>\n          <li>Почувствуйте, как улыбается весь ваш левый глаз, и почувствуйте его взаимосвязь с поднятым левым уголком\n            ваших губ. Почувствуйте, как внешний уголок вашего левого глаза изгибается, когда вы улыбаетесь.\n          </li>\n          <li>Почувствуйте, как улыбается весь ваш правый глаз, и почувствуйте его взаимосвязь с поднятым правым уголком\n            ваших губ. Почувствуйте, как внешний уголок вашего правого глаза изгибается, когда вы улыбаетесь.\n          </li>\n          <li>Быстро перенесите точку концентрации на кончик носа и достаточно быстро поднимите ее к бугорку носа, а\n            затем к Третьему Глазу.\n          </li>\n          <li>Направьте улыбку в точку Третьего Глаза. Ощутите, как эта улыбка входит в пространство за Третьим Глазом,\n            ощущение должно быть такое, как будто вы смогли развернуть свое зрение в обратную сторону и заглянуть себе в\n            голову. Оставайтесь там две минуты или больше.\n          </li>\n          <li>Поместите язык между передней стороной зубов и внутренней стороной губ, 9 раз проведите языком по кругу —\n            все равно, в каком направлении, — затем поместите язык за зубами и 6 раз проведите языком в обратном\n            направлении. Ваш рот должен наполниться слюной. Подвигайте нижней челюстью вперед-назад, как будто вы «жуете\n            слюну», наполняя ее энергией улыбки.\n          </li>\n          <li>Поместите кончик языка на нёбо за зубами. Втяните подбородок, выпрямите заднюю часть шеи и напрягите\n            горло, с шумом проглотите слюну.\n          </li>\n          <li>Проследите путь слюны и опустите свою концентрацию и энергию улыбки в точку Нижнего Даньтяня, примерно на\n            две трети вглубь тела и чуть больше дюйма ниже пупка. Если вы ничего не чувствуете, просто воспользуйтесь\n            своим воображением и представьте себе, как это должно быть.\n          </li>\n          <li>Выполните Дыхание Кузнечных Мехов — примерно 18 или больше коротких резких вдохов и выдохов, как при\n            Брюшном Дыхании, причем каждый вдох или выдох не должен длиться больше одной секунды. Используйте брюшные\n            мышцы для того, чтобы сильно сократить живот на выдохе. Вдох и выдох делайте через нос.\n          </li>\n          <li>Несколько минут удерживайте свою концентрацию на Нижнем Даньтяне и одновременно переключитесь на медленное\n            Брюшное Дыхание (это называется Медленный Огонь).\n          </li>\n          <li>Завершение упражнения:</li>\n          <p><b>Мужчины:</b> Положите левую руку на пупок и накройте ее правой рукой сверху. Сделайте 36 круговых\n            движений по часовой стрелке (сверху вниз идете по левой стороне, а поднимаетесь по правой), круги не должны\n            превышать трех дюймов, ладони накрывают одна другую. Затем поменяйте направление и сделайте 24 круговых\n            движения против часовой стрелки. Также пользуйтесь сознанием для направления ци вокруг пупка. На последнем\n            движении направьте ци в Нижний Даныпянъ.</p>\n          <p><b>Женщины:</b> Положите свою правую руку на пупок и накройте ее своей левой рукой сверху. Сделайте 36\n            круговых движений против часовой стрелки (сверху вниз идете по правой стороне, а поднимаетесь по левой),\n            круги не должны быть больше трех дюймов, ладони накрывают одна другую. Затем поменяйте направление и\n            сделайте 24 круговых движения по часовой стрелке. Также пользуйтесь сознанием для наравления ци вокруг пука.\n            На последнем движении направьте ци в Нижний Данътянь.</p>\n          <li>Разотрите ладони и сделайте Массаж Лица. Снова разотрите ладони, накройте ими глаза и впитывайте ци\n            глазами.\n          </li>\n        </ol>\n\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageThree')\">\n        <h4>3-й этап</h4>\n        <ion-icon *ngIf=\"showStageThree\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageThree\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageThree\">\n        <ol>\n          <li>Кончик вашего языка поднят к нёбу.</li>\n          <li>Направьте свое сознание на кончик носа, сместитесь на бугорок носа, а затем в Третий Глаз.</li>\n          <li>Представьте солнце (не используйте образ луны для этого упражнения), улыбающееся вам прямо в глаза.\n            Направьте улыбку во внешние и внутренние уголки обоих глаз, в зрачки, радужки, белки, верхние и нижние веки,\n            почувствуйте их взаимосвязь с уголками губ.\n          </li>\n          <li>Выполните Улыбку Передней Линии (пять основных органов).</li>\n          <li>Проглотите слюну и сделайте Улыбку Средней Линии (шея, желудок, толстый и тонкий кишечники, прямая кишка и\n            анус).\n          </li>\n          <li>Соберите энергию улыбки в точке Третьего Глаза. Внутренним зрением направьте свою улыбку на три дюйма\n            прямо назад в гипофиз. Почувствуйте, как гипофиз открывается и начинает расцветать. Ощутите, как энергия\n            улыбки расширяется вокруг гипофиза и заполняет весь Хрустальный Дворец, который включает таламус и\n            шишковидную железу. Это энергетический центр нервной системы. Почувствуйте, как центр вашего мозга излучает\n            яркий золотой свет, который освещает весь ваш мозг.\n          </li>\n          <li>\n            Сместите вашу улыбку в форме сияющего света вверх к левой стороне мозга.\n            <br/>\n            Перемещайте внутреннее улыбающееся зрение вперед и назад по левому полушарию. Двигайтесь вперед-назад,\n            вверх-вниз до тех пор, пока не почувствуете всю левую сторону мозга наполненной лучащейся энергией улыбки.\n          </li>\n\n          <li>Теперь переместите Внутреннюю Улыбку в правую часть мозга. Двигайтесь вперед-назад, вверх-вниз, до тех\n            пор, пока не почувствуете всю правую сторону мозга наполненной лучащейся энергией улыбки и любви.\n          </li>\n          <li>Перенесите золотую лучащуюся улыбку в переднюю часть мозга и двигайте ее назад через середину мозга.\n            Граница между правым полушарием и левым растворяется. Затем улыбка поворачивает вниз в мозжечок, который\n            находится в основании черепа. Это уравновесит ваши полушария и укрепит нервы.\n          </li>\n          <li>Переместите Внутреннюю Улыбку в средину, где мозг стыкуется с самыми верхними позвонками шеи.\n            Почувствуйте, как она расширяется, становится мягкой и входит в позвоночный столб. Перемещайте Внутреннюю\n            Улыбку, начиная с шейных позвонков у основания черепа. Наполните лучащейся энергией любви каждый позвонок и\n            диск под ним. Считайте каждый позвонок, когда опускаете улыбку вниз через позвоночник. Пройдите один за\n            другим все семь шейных позвонков.\n          </li>\n          <li>Когда закончите шейные позвонки, продолжайте спускаться через двенадцать грудных позвонков, проходите\n            позвонки один за другим.\n          </li>\n          <li>Дальше направьте улыбку в пять поясничных позвонков нижнего отдела спины.</li>\n          <li>Продолжите в крестце, улыбнитесь этой треугольной кости, состоящей из пяти сросшихся позвонков.</li>\n          <li>В конце улыбнитесь своему копчику —кости в самом кончике вашего позвоночника.</li>\n          <li>Теперь весь ваш позвоночник наполнен улыбающимся золотым лучащимся светом. Почувствуйте, как ваш\n            позвоночный столб начинает чувствовать себя свободно и комфортно. Почувствуйте, как диски становятся мягче,\n            когда вы направляете в них улыбку. Почувствуйте, как ваш позвоночник расширяется и удлиняется, позволяя вам\n            почувствовать себя более высокими. Лучистая энергия улыбки заполняет весь ваш позвоночник и выходит из него\n            во все нервы вашего тела.\n          </li>\n          <li>Почувствуйте, как Внутренняя Улыбка излучается в ваши руки и кисти.</li>\n          <li>Почувствуйте, как Внутренняя Улыбка излучается в ваши руки и кисти. <br/>Улыбнитесь своим пальцам,\n            почувствуйте, как кончик каждого пальца улыбается и светится подобно маленькому солнцу.\n          </li>\n          <li>Направьте улыбку вниз в половые органы, а затем в ноги, через колени и лодыжки в свои стопы. Улыбнитесь\n            своим пальцам ног, почувствуйте, как кончик каждого пальца улыбается и светится подобно маленькому солнцу.\n            Почувствуйте, как все ваше тело улыбается и излучает золотой свет.\n          </li>\n          <li>Верните свою Внутреннюю Улыбку в область Третьего Глаза. С помощью языка выделите слюну и наполните ее\n            золотым лучистым светом. Проглотите слюну и проследите ее путь вниз в Нижний Даньтянъ. Сделайте Дыхание\n            Кузнечных Мехов для Разогрева Печи. Сделайте минимум 18 быстрых вдохов.\n          </li>\n          <li>Верните свою Внутреннюю Улыбку в область Третьего Глаза. С помощью языка выделите слюну и наполните ее\n            золотым лучистым светом. Проглотите слюну и проследите ее путь вниз в Нижний Даньтянъ. Сделайте Дыхание\n            Кузнечных Мехов для Разогрева Печи. Сделайте минимум 18 быстрых вдохов.\n          </li>\n          <p><b>Завершение:</b></p>\n          <li><b>Мужчины:</b> заставьте энергию двигаться спиральными движениями по часовой стрелке 36 раз вокруг пупка,\n            поменяйте направление и сделайте 24 раза против часовой стрелки.\n            <br/> <br/><b>Женщины: </b>заставьте энергию двигаться спиральными движениями против часовой стрелки 36 раз\n            вокруг пупка, поменяйте направление и сделайте 24 раза по часовой стрелке.\n          </li>\n          <li>Разотрите ладони и сделайте массаж лица. Разотрите их снова, накройте ими глаза и впитывайте ци прямо в\n            глаза.\n          </li>\n          <li>Разотрите ладони и сделайте массаж лица. Разотрите их снова, накройте ими глаза и впитывайте ци прямо в\n            глаза.\n          </li>\n          <li><b>Мужчины:</b> положите левую ладонь на пупок и накройте ее правой ладонью сверху.\n            <br/> <br/>\n            <b>Женщины:</b> положите правую ладонь на пупок и накройте ее левой ладонью сверху. Тихо посидите так с\n            минуту или две, чтобы закончить упражнение.\n          </li>\n        </ol>\n\n      </div>\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ }),

/***/ 5358:
/*!**************************************************************************************************!*\
  !*** ./src/app/guides/exercises/six-healing-sounds/six-healing-sounds.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n    <h1><b>Шесть</b></h1>\n    <h1><b>целительных</b></h1>\n    <h1><b>звуков</b></h1>\n    <p>Звуковая медитация</p>\n\n    <br>\n    <br>\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageOne')\">\n        <h4>Звук легких</h4>\n        <ion-icon *ngIf=\"showStageOne\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageOne\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageOne\">\n        <ol>\n          <li>Практикуйте Хранение Одного. Сначала на короткое время сфокусируйтесь на точке перед собой. Затем скосите\n            глаза и на минуту или две сфокусируйте их на кончике носа, после чего также на минуту или две перенесите\n            точку фокусировки на две трети длины носа вверх, на бугорок. Затем переместите точку фокусировки и\n            сконцентрируйтесь на точке между глазами и оставьте ее там на минуту или две.\n          </li>\n          <li>Закройте глаза.</li>\n          <li>Используйте свое воображение или силу визуализации для того, чтобы представить прямо перед своими глазами\n            солнце, если вы делаете это днем, или луну, если ночью. У этого солнца или луны улыбающееся лицо, и\n            улыбается оно прямо вам в глаза. Если вам будет легче, можете представить улыбающееся лицо любимого\n            человека.\n          </li>\n          <li>Направьте исходящую от солнца, луны или любимого человека энергию улыбки. Она направлена во внешний угол\n            левого глаза. Почувствуйте, как уголок вашего левого глаза начинает расслабляться и улыбаться.\n          </li>\n          <li>Поднимите левый уголок вашего рта в улыбке. Почувствуйте взаимосвязь между улыбающимся левым уголком\n            вашего рта и улыбающимся внешним уголком вашего левого глаза. Почувствуйте, как левая половина вашего лица\n            как бы воспряла и расслабилась.\n          </li>\n          <li>Повторите ту же процедуру для внешнего уголка вашего правого глаза и правого уголка рта.</li>\n          <li>Направьте улыбку во внутренний утолок левого глаза.</li>\n          <li>Повторите то же самое для внутреннего уголка правого глаза.</li>\n          <li>Переведите энергию улыбки от солнца или луны в зрачок глаза и почувствуйте, как он наполняется энергией.\n          </li>\n          <li>Повторите то же самое для правого зрачка и почувствуйте, как он наполняется энергией улыбки.</li>\n          <li>Переведите энергию улыбки в радужную оболочку левого глаза и почувствуйте, как она наполняется энергией\n            улыбки. Глубоко вдохните, как при Брюшном Дыхании, затем выдохните и втяните мышцу радужки, одновременно\n            втягивая анус для того, чтобы помочь себе почувствовать и активизировать радужную оболочку глаза. Вдохните и\n            расслабьтесь.\n          </li>\n          <li>Повторите то же самое для радужной оболочки правого глаза, выдохните и натяните мышцу радужки,\n            одновременно втягивая анус. Вдохните и расслабьтесь.\n          </li>\n          <li>Направьте улыбку во всю белую часть левого глаза, как снаружи, так и внутри, почувствуйте, как все глазное\n            яблоко наполняется энергией улыбки.\n          </li>\n          <li>Повторите то же самое для белка и внутренней части правого глаза.</li>\n          <li>Направьте улыбку в верхнее веко левого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в верхнее веко правого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в нижнее веко левого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Направьте улыбку в нижнее веко правого глаза и почувствуйте, как оно наполняется энергией улыбки.</li>\n          <li>Держите глаза закрытыми и сосредоточьте свое сознание на кончике носа.</li>\n          <li>Перенесите сначала свое сознание на бугорок на носу, а затем на Третий Глаз.</li>\n          <li>Направьте улыбку в Третий Глаз. Переведите энергию улыбки солнца, если на дворе день, луны, если на дворе\n            ночь, или улыбающегося лица любимого человека в область Третьего Глаза. Почувствуйте, как эта область\n            расслабляется по мере наполнения энергией.\n          </li>\n          <li>Переведите энергию улыбки в голову. Представьте себе, что ваш взгляд начинается на кончике носа, идет\n            вверх через бугорок в Третий Глаз и углубляется на 3 дюйма дальше в мозг. Мысленно оставайтесь там в течение\n            нескольких минут. Понаблюдайте за своими мыслями или просто посидите тихо.\n          </li>\n          <li>Разотрите руки и сделайте массаж лица, накройте глаза ладонями и перед тем, как открыть глаза, несколько\n            секунд впитывайте тепло.\n          </li>\n        </ol>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageTwo')\">\n        <h4>Звук почек</h4>\n        <ion-icon *ngIf=\"showStageTwo\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageTwo\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageTwo\">\n        <ol>\n          <li>Повторите упражнение Золотого Цветка до того места, где вы направляли улыбку в различные части глаз и\n            связывали эту улыбку с улыбкой поднятых уголков губ. Если вы связали внешние и внутренние уголки глаз,\n            зрачки, радужки, белки и верхние и нижние веки, то вы готовы приступить к дальнейшим этапам упражнения.\n          </li>\n          <li>Почувствуйте, как улыбается весь ваш левый глаз, и почувствуйте его взаимосвязь с поднятым левым уголком\n            ваших губ. Почувствуйте, как внешний уголок вашего левого глаза изгибается, когда вы улыбаетесь.\n          </li>\n          <li>Почувствуйте, как улыбается весь ваш правый глаз, и почувствуйте его взаимосвязь с поднятым правым уголком\n            ваших губ. Почувствуйте, как внешний уголок вашего правого глаза изгибается, когда вы улыбаетесь.\n          </li>\n          <li>Быстро перенесите точку концентрации на кончик носа и достаточно быстро поднимите ее к бугорку носа, а\n            затем к Третьему Глазу.\n          </li>\n          <li>Направьте улыбку в точку Третьего Глаза. Ощутите, как эта улыбка входит в пространство за Третьим Глазом,\n            ощущение должно быть такое, как будто вы смогли развернуть свое зрение в обратную сторону и заглянуть себе в\n            голову. Оставайтесь там две минуты или больше.\n          </li>\n          <li>Поместите язык между передней стороной зубов и внутренней стороной губ, 9 раз проведите языком по кругу —\n            все равно, в каком направлении, — затем поместите язык за зубами и 6 раз проведите языком в обратном\n            направлении. Ваш рот должен наполниться слюной. Подвигайте нижней челюстью вперед-назад, как будто вы «жуете\n            слюну», наполняя ее энергией улыбки.\n          </li>\n          <li>Поместите кончик языка на нёбо за зубами. Втяните подбородок, выпрямите заднюю часть шеи и напрягите\n            горло, с шумом проглотите слюну.\n          </li>\n          <li>Проследите путь слюны и опустите свою концентрацию и энергию улыбки в точку Нижнего Даньтяня, примерно на\n            две трети вглубь тела и чуть больше дюйма ниже пупка. Если вы ничего не чувствуете, просто воспользуйтесь\n            своим воображением и представьте себе, как это должно быть.\n          </li>\n          <li>Выполните Дыхание Кузнечных Мехов — примерно 18 или больше коротких резких вдохов и выдохов, как при\n            Брюшном Дыхании, причем каждый вдох или выдох не должен длиться больше одной секунды. Используйте брюшные\n            мышцы для того, чтобы сильно сократить живот на выдохе. Вдох и выдох делайте через нос.\n          </li>\n          <li>Несколько минут удерживайте свою концентрацию на Нижнем Даньтяне и одновременно переключитесь на медленное\n            Брюшное Дыхание (это называется Медленный Огонь).\n          </li>\n          <li>Завершение упражнения:</li>\n          <p><b>Мужчины:</b> Положите левую руку на пупок и накройте ее правой рукой сверху. Сделайте 36 круговых\n            движений по часовой стрелке (сверху вниз идете по левой стороне, а поднимаетесь по правой), круги не должны\n            превышать трех дюймов, ладони накрывают одна другую. Затем поменяйте направление и сделайте 24 круговых\n            движения против часовой стрелки. Также пользуйтесь сознанием для направления ци вокруг пупка. На последнем\n            движении направьте ци в Нижний Даныпянъ.</p>\n          <p><b>Женщины:</b> Положите свою правую руку на пупок и накройте ее своей левой рукой сверху. Сделайте 36\n            круговых движений против часовой стрелки (сверху вниз идете по правой стороне, а поднимаетесь по левой),\n            круги не должны быть больше трех дюймов, ладони накрывают одна другую. Затем поменяйте направление и\n            сделайте 24 круговых движения по часовой стрелке. Также пользуйтесь сознанием для наравления ци вокруг пука.\n            На последнем движении направьте ци в Нижний Данътянь.</p>\n          <li>Разотрите ладони и сделайте Массаж Лица. Снова разотрите ладони, накройте ими глаза и впитывайте ци\n            глазами.\n          </li>\n        </ol>\n\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"group-header\" (click)=\"onHeaderClick('showStageThree')\">\n        <h4>Звук печени</h4>\n        <ion-icon *ngIf=\"showStageThree\" name=\"chevron-up-outline\" size=\"small\"></ion-icon>\n        <ion-icon *ngIf=\"!showStageThree\" name=\"chevron-down-outline\" size=\"small\"></ion-icon>\n      </div>\n      <div *ngIf=\"showStageThree\">\n        <ol>\n          <li>Кончик вашего языка поднят к нёбу.</li>\n          <li>Направьте свое сознание на кончик носа, сместитесь на бугорок носа, а затем в Третий Глаз.</li>\n          <li>Представьте солнце (не используйте образ луны для этого упражнения), улыбающееся вам прямо в глаза.\n            Направьте улыбку во внешние и внутренние уголки обоих глаз, в зрачки, радужки, белки, верхние и нижние веки,\n            почувствуйте их взаимосвязь с уголками губ.\n          </li>\n          <li>Выполните Улыбку Передней Линии (пять основных органов).</li>\n          <li>Проглотите слюну и сделайте Улыбку Средней Линии (шея, желудок, толстый и тонкий кишечники, прямая кишка и\n            анус).\n          </li>\n          <li>Соберите энергию улыбки в точке Третьего Глаза. Внутренним зрением направьте свою улыбку на три дюйма\n            прямо назад в гипофиз. Почувствуйте, как гипофиз открывается и начинает расцветать. Ощутите, как энергия\n            улыбки расширяется вокруг гипофиза и заполняет весь Хрустальный Дворец, который включает таламус и\n            шишковидную железу. Это энергетический центр нервной системы. Почувствуйте, как центр вашего мозга излучает\n            яркий золотой свет, который освещает весь ваш мозг.\n          </li>\n          <li>\n            Сместите вашу улыбку в форме сияющего света вверх к левой стороне мозга.\n            <br/>\n            Перемещайте внутреннее улыбающееся зрение вперед и назад по левому полушарию. Двигайтесь вперед-назад,\n            вверх-вниз до тех пор, пока не почувствуете всю левую сторону мозга наполненной лучащейся энергией улыбки.\n          </li>\n\n          <li>Теперь переместите Внутреннюю Улыбку в правую часть мозга. Двигайтесь вперед-назад, вверх-вниз, до тех\n            пор, пока не почувствуете всю правую сторону мозга наполненной лучащейся энергией улыбки и любви.\n          </li>\n          <li>Перенесите золотую лучащуюся улыбку в переднюю часть мозга и двигайте ее назад через середину мозга.\n            Граница между правым полушарием и левым растворяется. Затем улыбка поворачивает вниз в мозжечок, который\n            находится в основании черепа. Это уравновесит ваши полушария и укрепит нервы.\n          </li>\n          <li>Переместите Внутреннюю Улыбку в средину, где мозг стыкуется с самыми верхними позвонками шеи.\n            Почувствуйте, как она расширяется, становится мягкой и входит в позвоночный столб. Перемещайте Внутреннюю\n            Улыбку, начиная с шейных позвонков у основания черепа. Наполните лучащейся энергией любви каждый позвонок и\n            диск под ним. Считайте каждый позвонок, когда опускаете улыбку вниз через позвоночник. Пройдите один за\n            другим все семь шейных позвонков.\n          </li>\n          <li>Когда закончите шейные позвонки, продолжайте спускаться через двенадцать грудных позвонков, проходите\n            позвонки один за другим.\n          </li>\n          <li>Дальше направьте улыбку в пять поясничных позвонков нижнего отдела спины.</li>\n          <li>Продолжите в крестце, улыбнитесь этой треугольной кости, состоящей из пяти сросшихся позвонков.</li>\n          <li>В конце улыбнитесь своему копчику —кости в самом кончике вашего позвоночника.</li>\n          <li>Теперь весь ваш позвоночник наполнен улыбающимся золотым лучащимся светом. Почувствуйте, как ваш\n            позвоночный столб начинает чувствовать себя свободно и комфортно. Почувствуйте, как диски становятся мягче,\n            когда вы направляете в них улыбку. Почувствуйте, как ваш позвоночник расширяется и удлиняется, позволяя вам\n            почувствовать себя более высокими. Лучистая энергия улыбки заполняет весь ваш позвоночник и выходит из него\n            во все нервы вашего тела.\n          </li>\n          <li>Почувствуйте, как Внутренняя Улыбка излучается в ваши руки и кисти.</li>\n          <li>Почувствуйте, как Внутренняя Улыбка излучается в ваши руки и кисти. <br/>Улыбнитесь своим пальцам,\n            почувствуйте, как кончик каждого пальца улыбается и светится подобно маленькому солнцу.\n          </li>\n          <li>Направьте улыбку вниз в половые органы, а затем в ноги, через колени и лодыжки в свои стопы. Улыбнитесь\n            своим пальцам ног, почувствуйте, как кончик каждого пальца улыбается и светится подобно маленькому солнцу.\n            Почувствуйте, как все ваше тело улыбается и излучает золотой свет.\n          </li>\n          <li>Верните свою Внутреннюю Улыбку в область Третьего Глаза. С помощью языка выделите слюну и наполните ее\n            золотым лучистым светом. Проглотите слюну и проследите ее путь вниз в Нижний Даньтянъ. Сделайте Дыхание\n            Кузнечных Мехов для Разогрева Печи. Сделайте минимум 18 быстрых вдохов.\n          </li>\n          <li>Верните свою Внутреннюю Улыбку в область Третьего Глаза. С помощью языка выделите слюну и наполните ее\n            золотым лучистым светом. Проглотите слюну и проследите ее путь вниз в Нижний Даньтянъ. Сделайте Дыхание\n            Кузнечных Мехов для Разогрева Печи. Сделайте минимум 18 быстрых вдохов.\n          </li>\n          <p><b>Завершение:</b></p>\n          <li><b>Мужчины:</b> заставьте энергию двигаться спиральными движениями по часовой стрелке 36 раз вокруг пупка,\n            поменяйте направление и сделайте 24 раза против часовой стрелки.\n            <br/> <br/><b>Женщины: </b>заставьте энергию двигаться спиральными движениями против часовой стрелки 36 раз\n            вокруг пупка, поменяйте направление и сделайте 24 раза по часовой стрелке.\n          </li>\n          <li>Разотрите ладони и сделайте массаж лица. Разотрите их снова, накройте ими глаза и впитывайте ци прямо в\n            глаза.\n          </li>\n          <li>Разотрите ладони и сделайте массаж лица. Разотрите их снова, накройте ими глаза и впитывайте ци прямо в\n            глаза.\n          </li>\n          <li><b>Мужчины:</b> положите левую ладонь на пупок и накройте ее правой ладонью сверху.\n            <br/> <br/>\n            <b>Женщины:</b> положите правую ладонь на пупок и накройте ее левой ладонью сверху. Тихо посидите так с\n            минуту или две, чтобы закончить упражнение.\n          </li>\n        </ol>\n\n      </div>\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ }),

/***/ 5758:
/*!*****************************************************************!*\
  !*** ./src/app/login-page/login-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <ion-header>\n    <ion-toolbar color=\"success\">\n      <ion-title>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signIn(userForm.value)\">\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngFor=\"let error of error_msg.email\">\n        <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required=\"true\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngFor=\"let error of error_msg.password\">\n        <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n\n      <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\">Signin</ion-button>\n\n      <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n    </form>\n\n    <p class=\"ion-text-center\">Not registered yet? <a (click)=\"goToSignup()\">Register</a></p>\n    <br/>\n    <p class=\"ion-text-center\"><a routerLink=\"/\"><< Home</a></p>\n<!--    <div id=\"container\">-->\n<!--      <img (click)=\"null\" class=\"icon\" src=\"../../assets/google.svg\" alt=\"Авторизация с помощью Google\">-->\n<!--      <img class=\"icon\" src=\"../../assets/facebook.svg\" alt=\"Авторизация с помощью Facebook\">-->\n<!--      <img class=\"icon\" src=\"../../assets/apple_logo.svg\" alt=\"Авторизация с помощью Apple\">-->\n<!--      <img class=\"icon\" src=\"../../assets/android.svg\" alt=\"Авторизация с помощью Android\">-->\n<!--    </div>-->\n  </ion-content>\n\n\n\n</ion-content>\n";

/***/ }),

/***/ 7286:
/*!*******************************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Регистрация</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signUp(userForm.value)\">\n    <ion-item>\n      <ion-label position=\"floating\">Почта</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ng-container *ngFor=\"let error of errorMessage.email\">\n      <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Пароль</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required=\"true\"></ion-input>\n    </ion-item>\n\n    <ng-container *ngFor=\"let error of errorMessage.password\">\n      <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\">Регистрация</ion-button>\n\n    <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n    <label class=\"ion-text-center\" color=\"success\">{{successMsg}}</label>\n  </form>\n  <p class=\"ion-text-center\">Уже зарегистрированы? <a (click)=\"goToLogin()\">Логин</a></p>\n  <br/>\n  <p class=\"ion-text-center\"><a routerLink=\"/\"><< На главный экран</a></p>\n</ion-content>\n";

/***/ }),

/***/ 6113:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/alarm/alarm.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<img src=\"../../../../assets/icons/alarm.png\" alt=\"alarm\"/>\n";

/***/ }),

/***/ 1933:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"footer\">\n  <div class=\"button one\" (click)=\"goto('tabs/tab2')\"></div>\n  <div class=\"button two\" (click)=\"goto('tabs/tab3')\"></div>\n  <div class=\"button three\" (click)=\"goto('tabs/tab4')\"></div>\n</div>\n";

/***/ }),

/***/ 3187:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n  <div *ngIf=\"hours\" [ngClass]=\"disabled ? 'badge badge-disabled' : 'badge'\">\n    <span class=\"badge-label\">{{'Часов практики:'}}\n    </span><b>{{hours}}</b></div>\n  <img [ngClass]=\"disabled ? 'preview preview-disabled' : 'preview'\" [src]=\"src\" alt=\"Хранение одного\"/>\n  <div class=\"titleContainer\">\n    <p [ngClass]=\"disabled ? 'title title-disabled' : 'title'\">{{title}}</p>\n    <p [ngClass]=\"disabled ? 'subtitle subtitle-disabled' : 'subtitle'\">{{subTitle}}</p>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 1178:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"start\" menu-id=\"main\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"signOut()\">Выйти</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n";

/***/ }),

/***/ 2212:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/top/top.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"top\">\n  <div class=\"container\">\n    <img class=\"icon\" src=\"../../../../assets/icons/meditation-icon.png\">\n    <p *ngIf=\"!meditationIsLoading\" class=\"label\">{{meditationCount}}</p>\n    <ion-spinner *ngIf=\"meditationIsLoading\" name=\"bubbles\"></ion-spinner>\n  </div>\n  <div class=\"container\">\n    <img class=\"icon\" src=\"../../../../assets/icons/qigong-icon.png\">\n    <p  *ngIf=\"!standIsLoading\" class=\"label\">{{standCount}}</p>\n    <ion-spinner *ngIf=\"standIsLoading\" name=\"bubbles\"></ion-spinner>\n\n  </div>\n  <div class=\"container\">\n    <img class=\"icon\" src=\"../../../../assets/icons/breath.png\">\n    <p class=\"label\">0</p>\n  </div>\n  <div class=\"container\">\n<!--    <img class=\"icon\" src=\"../../../../assets/icons/stretching-icon.png\">-->\n<!--    <p class=\"label\">0</p>-->\n  </div>\n  <div class=\"container\">\n    <ion-menu-button menu=\"main\">\n      <img class=\"icon\" src=\"../../../../assets/icons/userpic.png\">\n    </ion-menu-button>\n  </div>\n</div>\n";

/***/ }),

/***/ 522:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/audio-player/audio-player.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <app-top></app-top>\n  <div class=\"top\"><a class=\"exit\" (click)=\"goBack()\"><< Вернуться</a></div>\n\n  <div class=\"play\">\n    <p class=\"play-text\">{{title}}</p>\n\n  </div>\n\n\n  <iframe width=\"100%\" height=\"100%\" allow=\"autoplay\"\n          [src]='src | safe'></iframe>\n</ion-content>\n";

/***/ }),

/***/ 1503:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tab2/tab2.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <app-top></app-top>\n  <app-alarm></app-alarm>\n  <div id=\"container\">\n    <div class=\"row\">\n      <app-icon\n        [src]=\"'../../assets/theory-previews/meditation.png'\"\n        routerLink=\"/audio-player\"\n        [queryParams]=\"{\n          link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1296571417&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',\n          title: 'Медитация на развитие концентрации'\n          }\"\n        [hours]=\"1\"\n        [disabled]=\"false\"\n        title=\"Медитация\"\n        subTitle=\"на развитие концентрации\"\n      >\n      </app-icon>\n      <app-icon [src]=\"'../../assets/theory-previews/sounds.png'\" [hours]=\"1\" [disabled]=\"false\" title=\"Практика\"\n                subTitle=\"Шесть целительных звуков\">\n      </app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/qigong.png'\" [hours]=\"1\" [disabled]=\"false\" title=\"Цигун\"\n                subTitle=\"для укрепления иммунитета\"></app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/self-massage.png'\" [hours]=\"1\" [disabled]=\"false\" title=\"Практика\"\n                subTitle=\"даосский самомассаж\"></app-icon>\n      <app-icon [src]=\"'../../assets/theory-previews/inner-smile.png'\" [hours]=\"1\" [disabled]=\"false\" title=\"Медитация\"\n                subTitle=\"внутренняя улыбка\"></app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/stretching.png'\" [hours]=\"1\" [disabled]=\"false\" title=\"Практика\"\n                subTitle=\"Растяжка\"></app-icon>\n    </div>\n\n\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n\n    <div class=\"row\">\n      <app-icon\n        [src]=\"'../../assets/theory-previews/meditation.png'\"\n        routerLink=\"/audio-player\"\n        [hours]=\"1\"\n        [disabled]=\"true\"\n        title=\"Медитация\"\n        subTitle=\"на развитие концентрации\"\n      >\n      </app-icon>\n\n      <app-icon [src]=\"'../../assets/theory-previews/sounds.png'\"\n                [hours]=\"1\"\n                [disabled]=\"true\"\n                title=\"Медитация\"\n                subTitle=\"на развитие концентрации\">\n\n      </app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/qigong.png'\" [hours]=\"1\" [disabled]=\"true\" title=\"Медитация\"\n                subTitle=\"на развитие концентрации\"></app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/self-massage.png'\" [hours]=\"2\" [disabled]=\"true\" title=\"Медитация\"\n                subTitle=\"на развитие концентрации\"></app-icon>\n      <app-icon [src]=\"'../../assets/theory-previews/inner-smile.png'\" [hours]=\"1\" [disabled]=\"true\" title=\"Медитация\"\n                subTitle=\"на развитие концентрации\"></app-icon>\n    </div>\n    <div class=\"row\">\n      <app-icon [src]=\"'../../assets/theory-previews/stretching.png'\" [hours]=\"2\" [disabled]=\"true\" title=\"Медитация\"\n                subTitle=\"на развитие концентрации\"></app-icon>\n    </div>\n\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8990:
/*!*****************************************************************************!*\
  !*** ./src/app/tabs/tab3/chronometer/chronometer.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"container\">\n    хронометр\n    <div class=\"title-container\">\n      <img [src]=\"img\" [alt]=\"title\">\n      <div class=\"titles\">\n        <p><b>{{title}}</b></p>\n        <p class=\"subtitle\">{{subTitle}}</p>\n      </div>\n    </div>\n    <div class=\"timer\">{{ timerValue }}</div>\n    <ion-progress-bar *ngIf=\"progressbarVisible\" [value]=\"timer$ | async\" [buffer]=\"buffer_\"></ion-progress-bar>\n    <div class=\"buttons-container\">\n      <ion-button class=\"stop-button\" shape=\"round\" fill=\"clear\" (click)=\"stop()\">\n        <img class=\"img\"\n             src=\"../../../../assets/icons/button-stop.svg\"\n             alt=\"stop\">\n      </ion-button>\n      <ion-button class=\"pick-button\" shape=\"round\" fill=\"clear\" (click)=\"openPicker()\">\n        <img class=\"img\"\n             src=\"../../../../assets/icons/button-pick-time.svg\"\n             alt=\"pick\">\n      </ion-button>\n      <ion-button [disabled]=\"timerValue === '00:00:00'\" class=\"play-button\" shape=\"round\" fill=\"clear\"\n                  (click)=\"play()\"><img class=\"img\" src=\"../../../../assets/icons/button-play.svg\" alt=\"play\">\n      </ion-button>\n    </div>\n    <p class=\"description\">После освоения какой-либо из медитаций, здесь вы можете учитывать ваш прогресс в ее\n      регулярной практике.</p>\n    <p class=\"description\">Количество набранных очков в регулярной практике откроет доступ к более продвинутым\n      медитациям и возможностям приложения.</p>\n    <div class=\"top\"><a class=\"exit\" (click)=\"goBack()\"><< Вернуться</a></div>\n\n  </div>\n\n</ion-content>\n";

/***/ }),

/***/ 4535:
/*!*****************************************************************!*\
  !*** ./src/app/tabs/tab3/timer/timer.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div class=\"title-container\">\n      <img [src]=\"img\" [alt]=\"title\">\n      <div class=\"titles\">\n        <p><b>{{title}}</b></p>\n        <p class=\"subtitle\">{{subTitle}}</p>\n      </div>\n    </div>\n    <div class=\"timer\">{{ timerValue }}</div>\n    <ion-progress-bar *ngIf=\"progressbarVisible\" [value]=\"timer$ | async\" [buffer]=\"buffer_\"></ion-progress-bar>\n    <div class=\"buttons-container\">\n      <ion-button class=\"stop-button\" shape=\"round\" fill=\"clear\" (click)=\"stop()\">\n        <img class=\"img\"\n             src=\"../../../../assets/icons/button-stop.svg\"\n             alt=\"stop\">\n      </ion-button>\n      <ion-button class=\"pick-button\" shape=\"round\" fill=\"clear\" (click)=\"openPicker()\">\n        <img class=\"img\"\n             src=\"../../../../assets/icons/button-pick-time.svg\"\n             alt=\"pick\">\n      </ion-button>\n      <ion-button [disabled]=\"timerValue === '00:00:00'\" class=\"play-button\" shape=\"round\" fill=\"clear\"\n                  (click)=\"play()\"><img class=\"img\" src=\"../../../../assets/icons/button-play.svg\" alt=\"play\">\n      </ion-button>\n    </div>\n    <p class=\"description\">После освоения какой-либо из медитаций, здесь вы можете учитывать ваш прогресс в ее\n      регулярной практике.</p>\n    <p class=\"description\">Количество набранных очков в регулярной практике откроет доступ к более продвинутым\n      медитациям и возможностям приложения.</p>\n    <div class=\"top\"><a class=\"exit\" (click)=\"goBack()\"><< Вернуться</a></div>\n\n  </div>\n\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map