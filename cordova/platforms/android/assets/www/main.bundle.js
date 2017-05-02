webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapDialogComponent = (function () {
    function MapDialogComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MapDialogComponent.prototype.ngOnInit = function () {
        this.url = 'https://maps.google.com/maps?output=embed&q=' + this.contact.address + ',+' + this.contact.city;
        console.log('mapUrl: ' + this.url);
    };
    MapDialogComponent.prototype.trustedUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    return MapDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* Contact */]) === "function" && _a || Object)
], MapDialogComponent.prototype, "contact", void 0);
MapDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-map-dialog',
        template: __webpack_require__(230),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _b || Object])
], MapDialogComponent);

var _a, _b;
//# sourceMappingURL=map-dialog.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: 'local'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 131;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.onWindowResize(null);
    }
    AppComponent.prototype.onWindowResize = function (event) {
        var width = event ? event.target.innerWidth : window.innerWidth;
        this.sidenavMode = width >= 600 ? 'side' : 'over';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.urlAfterRedirects == '/login' || event.urlAfterRedirects == '/') {
                    _this.toolbarDisabled = true;
                }
                else {
                    _this.toolbarDisabled = false;
                    _this.onWindowResize(null);
                }
            }
        });
    };
    AppComponent.prototype.navigateHome = function (sideNav) {
        this.router.navigate(['login']);
        if (this.sidenavMode == 'over') {
            sideNav.toggle();
        }
    };
    AppComponent.prototype.navigateContacts = function (sideNav) {
        this.router.navigate(['contacts']);
        if (this.sidenavMode == 'over') {
            sideNav.toggle();
        }
    };
    AppComponent.prototype.toggleSideNav = function () {
        this.sidenav.toggle();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowResize", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(225),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_list_contact_list_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_item_contact_list_item_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_services_contact_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_services_dialog_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_Dialogs_contact_dialog_contact_dialog_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__map_map_dialog_map_dialog_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_pipes_contact_address_pipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contacts_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_login_login_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_storage_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_local_storage_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_17__user_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_16__contact_contacts_component__["a" /* ContactsComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_item_contact_list_item_component__["a" /* ContactListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__contact_pipes_contact_address_pipe__["a" /* ContactAddressPipe */],
            __WEBPACK_IMPORTED_MODULE_16__contact_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__contact_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_12__contact_services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_storage_service__["a" /* ContactApiStorageService */], __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_local_storage_service__["a" /* ContactLocalStorageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_13__contact_Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListItemComponent = (function () {
    function ContactListItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.showOnMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ContactListItemComponent.prototype.ngOnInit = function () {
    };
    ContactListItemComponent.prototype.deleteContactItem = function () {
        console.log('this is delete button: ' + this.contact.id);
        this.remove.emit(this.contact);
    };
    ContactListItemComponent.prototype.editContactItem = function () {
        this.edit.emit(this.contact);
    };
    ContactListItemComponent.prototype.showMapItem = function () {
        this.showOnMap.emit(this.contact);
    };
    return ContactListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactListItemComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ContactListItemComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], ContactListItemComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _d || Object)
], ContactListItemComponent.prototype, "showOnMap", void 0);
ContactListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-list-item',
        template: __webpack_require__(227),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [])
], ContactListItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list-item.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = (function () {
    function ContactListComponent() {
        this.removeContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.editContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.showContactOnMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent.prototype.deleteContactListItem = function (contact) {
        console.log('This is list, and id:' + contact.id);
        this.removeContact.emit(contact);
    };
    ContactListComponent.prototype.editContactListItem = function (contact) {
        this.editContact.emit(contact);
    };
    ContactListComponent.prototype.showMapListItem = function (contact) {
        this.showContactOnMap.emit(contact);
    };
    return ContactListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], ContactListComponent.prototype, "contacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], ContactListComponent.prototype, "editContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ContactListComponent.prototype, "removeContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], ContactListComponent.prototype, "showContactOnMap", void 0);
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__(228),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(contactService, dialogService) {
        this.contactService = contactService;
        this.dialogService = dialogService;
        this.reloadContacts();
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.reloadContacts = function () {
        var _this = this;
        this.contactService.findAllContacts().subscribe(function (data) {
            console.log('data: ' + data);
            _this.contactsList = data;
        });
    };
    ContactsComponent.prototype.addNewContact = function (contact) {
        var _this = this;
        this.contactService.addNewContact(contact).subscribe(function (data) {
            _this.reloadContacts();
        });
    };
    ContactsComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.contactService.editContact(contact).subscribe(function (data) {
            _this.reloadContacts();
        });
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        navigator.vibrate(1000);
        var question = confirm('Do you realy want to delete this contact: '
            + contact.firstName + ' ' + contact.lastName);
        if (question) {
            this.contactService.deleteContact(contact).subscribe(function (data) {
                _this.reloadContacts();
            });
        }
    };
    ContactsComponent.prototype.openDialog = function (contact) {
        var _this = this;
        navigator.vibrate([400, 300, 400, 300]);
        var returnValue = this.dialogService.contactDialog(contact);
        returnValue.subscribe(function (returnContact) {
            if (!returnContact) {
                return;
            }
            if (returnContact.id) {
                _this.editContact(returnContact);
            }
            else {
                _this.addNewContact(returnContact);
            }
        });
    };
    ContactsComponent.prototype.showMap = function (contact) {
        this.dialogService.openMap(contact);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__(229),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], ContactsComponent);

var _a, _b;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddressPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactAddressPipe = (function () {
    function ContactAddressPipe() {
    }
    ContactAddressPipe.prototype.transform = function (contact, args) {
        var addressParts = [contact.address || null, contact.city || null];
        addressParts = __WEBPACK_IMPORTED_MODULE_1_lodash__["reject"](addressParts, __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"]);
        return addressParts.join(', ');
    };
    return ContactAddressPipe;
}());
ContactAddressPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'contactAddress'
    })
], ContactAddressPipe);

//# sourceMappingURL=contact-address.pipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openContactsPage = function () {
        if (this.account && this.password) {
            navigator.vibrate([400, 300, 400, 300]);
            this.router.navigate(['contacts']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(231),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".toolbar-and-content {\r\n  position: relative;\r\n  height: 98vh;\r\n  min-height: 97vh;\r\n}\r\n\r\n.toolbar {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .3);\r\n  z-index: 3;\r\n}\r\n\r\n.router-body {\r\n  overflow-y: auto;\r\n}\r\n\r\n.sidenav-container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 98vh;\r\n  min-height: 98vh;\r\n}\r\n\r\n.contactSidenav {\r\n  background-image: url(" + __webpack_require__(280) + ");\r\n  background-size: 190px;\r\n  background-repeat: no-repeat;\r\n  width: 190px;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.sidenav-login {\r\n  height: 140px;\r\n  color: white;\r\n}\r\n\r\n.login-icon {\r\n  padding-top: 3px;\r\n  font-size: 64px;\r\n}\r\n\r\n.login-name {\r\n  padding-top: 8px;\r\n  padding-left: 10px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.login-mail {\r\n  padding-left: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".contact-Dialog-Body{\r\n  width: 260px;\r\n  height: 400px;\r\n\r\n}\r\n.dialog-inputs input{\r\n  width: 260px;\r\n}\r\n\r\n.contact-title{\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 28px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btnSave{\r\n  float: left;\r\n}\r\n.btnClose{\r\n  float: right;\r\n}\r\n.contact-dialog-action{\r\nmargin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "#card {\r\n  width: 250px;\r\n  margin-bottom: 20px;\r\n  background-color: mintcream;\r\n}\r\n\r\n.contact-item-header {\r\n  padding: 2px 0 0 2px;\r\n  border-radius: 3px 3px 0 0;\r\ncolor: white;\r\n  background-color: #7986cb;\r\n}\r\n\r\n.contact-item-header md-icon {\r\n  font-size: 42px;\r\n}\r\n\r\n#btnMap {\r\n  float: right;\r\n}\r\n\r\n.contact-item-table tr td{\r\n  padding: 2px 10px 2px 0px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".contacts-items{\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".contacts-list {\r\n  width: 100%;\r\n}\r\n\r\n.no-contacts-div {\r\n  width: 100%;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: lightgray;\r\n}\r\n\r\n.no-contacts-icon {\r\n  font-size: 250px;\r\n  height: 250px;\r\n  width: 250px;\r\n}\r\n\r\n.no-contacts-text {\r\n  font-size: 26px;\r\n}\r\n\r\n#btnAdd {\r\n  bottom: 30px;\r\n  left: calc(50% + 140px);\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".map-dialog-body{\r\n  width: 455px;\r\n  height: 420px;\r\n\r\n}\r\n\r\niframe{\r\n  width: 450px;\r\n  height: 300px;\r\n\r\n}\r\n\r\n#map-title{\r\n\r\n}\r\n\r\n.btnClose{\r\nfloat: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "\r\n.loginCard {\r\n  width: 350px;\r\n  text-align: center;\r\n}\r\n\r\n#loginTitle {\r\n  float: left;\r\n  position: absolute;\r\n  top: 190px;\r\n  font-size: 36px;\r\n  color: white;\r\n}\r\n\r\n.cardIcon {\r\n  font-size: 36px;\r\n  padding-right: 28px;\r\n  color: navy;\r\n}\r\n\r\n.btnSignIn {\r\n  margin-top: 18px;\r\n}\r\n\r\n.router-body{\r\n  overflow-y: hidden !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <md-sidenav-container class=\"sidenav-container\">\n    <md-sidenav *ngIf=\"!toolbarDisabled\" #sidenav class=\"contactSidenav\"\n                [mode]=\"sidenavMode\"\n                [opened]=\"sidenavMode == 'side'\">\n      <div class=\"sidenav-login\">\n        <md-icon class=\"md-48, login-icon\">account_circle</md-icon>\n        <div class=\"login-name\">User name</div>\n        <div class=\"login-mail\">User email</div>\n      </div>\n      <button md-icon-button (click)=\"navigateHome(sidenav)\">\n        <md-icon>home</md-icon>\n        <span>Home</span>\n      </button>\n      <br>\n      <button md-icon-button (click)=\"navigateContacts(sidenav)\">\n        <md-icon>mood</md-icon>\n        <span>Contacts</span>\n      </button>\n    </md-sidenav>\n\n    <div class=\"toolbar-and-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n      <md-toolbar *ngIf=\"!toolbarDisabled\" class=\"toolbar \">\n        <button md-icon-button (click)=\"toggleSideNav()\">\n          <md-icon>menu</md-icon>\n        </button>\n        <span>Contacts app</span>\n      </md-toolbar>\n\n      <div class=\"router-body\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n\n  </md-sidenav-container>\n</div>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-Dialog-Body\">\n\n  <div class=\"contact-title\">{{title}}</div>\n\n  <div md-dialog-content class=\"dialog-inputs\">\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"firstName\" type=\"text\" required\n             placeholder=\"Firstname\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"lastName\" type=\"text\" required\n             placeholder=\"Lastname\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"phone\" type=\"text\" required\n             placeholder=\"Phone\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"address\" type=\"text\" required\n             placeholder=\"Street Address\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"city\" type=\"text\" required\n             placeholder=\"City\">\n    </md-input-container>\n  </div>\n\n  <div class=\"contact-dialog-action\">\n    <button class=\"btnSave\" md-raised-button (click)=\"onSave()\" >{{btnSaveText}}</button>\n    <button class=\"btnClose\" md-raised-button (click)=\"dialogRef.close()\">Close</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-item-card\">\n<div class=\"contact-item-header\"><md-icon>account_circle</md-icon></div>\n<md-card id=\"card\" class=\"mat-card\">\n\n<md-card-header></md-card-header>\n\n  <md-card-content>\n    <md-card-title >{{contact.firstName+' '+contact.lastName}}</md-card-title>\n    <table class=\"contact-item-table\">\n      <tr><td>Phone:</td><td>{{contact.phone}}</td></tr>\n      <tr><td>Address:</td><td> {{contact.address}}</td></tr>\n      <tr><td>City:</td><td> {{contact.city}}</td></tr>\n      <tr><td>osoite: </td><td>{{contact | contactAddress}}</td></tr>\n      <tr><td>id: </td><td>{{contact.id}}</td></tr>\n    </table>\n  </md-card-content>\n\n  <md-card-actions>\n    <button md-icon-button (click)=\"deleteContactItem()\">\n      <md-icon >delete</md-icon>\n    </button>\n    <button md-icon-button (click)=\"editContactItem()\">\n      <md-icon >edit</md-icon>\n    </button>\n\n    <button id=\"btnMap\" md-icon-button (click)=\"showMapItem()\">\n      <md-icon class=\"md-18\">room</md-icon>\n    </button>\n\n  </md-card-actions>\n</md-card>\n</div>\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-items\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\" *ngFor=\"let contact of contacts\">\n\n  <app-contact-list-item [contact]=\"contact\"\n                         (remove)=\"deleteContactListItem($event)\"\n                         (edit)=\"editContactListItem($event)\"\n                         (showOnMap)=\"showMapListItem($event)\">\n  </app-contact-list-item>\n\n</div>\n\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-list\">\n<app-contact-list [contacts]=\"contactsList\"\n                  (removeContact)=\"deleteContact($event)\"\n                  (editContact)=\"openDialog($event)\"\n                  (showContactOnMap)=\"showMap($event)\">\n</app-contact-list>\n</div>\n\n<div *ngIf=\"!contactsList || !contactsList.length\" class=\"no-contacts-div\" fxLayout=\"column\" fxFlexAlign=\"center center\" fxFlexFill>\n  <md-icon class=\"no-contacts-icon\">account_circle</md-icon>\n  <p class=\"no-contacts-text\">  No contacts </p>\n</div>\n\n<button id=\"btnAdd\" md-fab (click)=\"openDialog()\" color=\"primary\">\n  <md-icon>add</md-icon>\n</button>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div md-dialog-content class=\"map-dialog-body\">\n  <div md-dialog-title id=\"map-title\">\n    {{contact.firstName}} {{contact.lastName}}\n  </div>\n  <div md-dialog-content>\n<iframe [src]=\"trustedUrl()\" allowfullscreen></iframe>\n\n  </div>\n\n  <br>\n  <!--div>url: {{url}}</div-->\n\n\n  <div class=\"map-dialog-action\">\n    <button class=\"btnClose\" md-raised-button md-dialog-close>Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <md-card class=\"loginCard\">\n\n    <img md-card-image src=\"assets/images/google-material-design-wallpaper-2.jpg\">\n\n    <md-card-title id=\"loginTitle\">Contacts app</md-card-title>\n\n    <br>\n\n    <div md-dialog-content fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <md-icon class=\"md-36\" class=\"cardIcon\">account_circle</md-icon>\n\n        <md-input-container floatPlaceholder=\"auto\">\n          <input mdInput [(ngModel)]=\"account\" type=\"text\"\n                 placeholder=\"Username\">\n        </md-input-container>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <md-icon class=\"md-36\" class=\"cardIcon\">lock</md-icon>\n\n        <md-input-container floatPlaceholder=\"auto\">\n          <input mdInput [(ngModel)]=\"password\" type=\"password\"\n                 placeholder=\"Password\">\n        </md-input-container>\n      </div>\n\n      <div class=\"contact-dialog-action\">\n        <button class=\"btnSignIn\" [disabled]=\"!account || !password\" md-raised-button (click)=\"openContactsPage()\">Login\n        </button>\n      </div>\n\n    </div>\n  </md-card>\n</div>\n\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google-material-design-wallpaper-2.cc7f3ac1dfb751135e33.jpg";

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstName, lastName, phone, address, city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.city = city;
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDialogComponent = (function () {
    function ContactDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.title = 'New Contact';
        this.btnSaveText = 'Add';
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]();
    }
    ContactDialogComponent.prototype.ngOnInit = function () {
        console.log('dialog read contact');
        if (this.contactInn) {
            this.title = 'Edit Contact';
            this.btnSaveText = 'Save';
            this.contact = this.contactInn;
            this.id = this.contactInn.id;
            this.firstName = this.contactInn.firstName;
            this.lastName = this.contactInn.lastName;
            this.phone = this.contactInn.phone;
            this.address = this.contactInn.address;
            this.city = this.contactInn.city;
        }
    };
    ContactDialogComponent.prototype.onSave = function () {
        this.contact.firstName = this.firstName;
        this.contact.lastName = this.lastName;
        this.contact.phone = this.phone;
        this.contact.address = this.address;
        this.contact.city = this.city;
        this.dialogRef.close(this.contact);
    };
    return ContactDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactDialogComponent.prototype, "contactInn", void 0);
ContactDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-dialog',
        template: __webpack_require__(226),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object])
], ContactDialogComponent);

var _a, _b;
//# sourceMappingURL=contact-dialog.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactApiStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactApiStorageService = (function () {
    function ContactApiStorageService(http) {
        this.http = http;
        this.url = "http://localhost:49478/api/contacts";
    }
    ContactApiStorageService.prototype.findContacts = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ContactApiStorageService.prototype.addNewContact = function (contact) {
        return this.http.post(this.url, contact);
    };
    ContactApiStorageService.prototype.editContact = function (contact) {
        return this.http.put(this.url, contact);
    };
    ContactApiStorageService.prototype.deleteContact = function (contact) {
        return this.http.delete(this.url + '/' + contact.id);
    };
    return ContactApiStorageService;
}());
ContactApiStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactApiStorageService);

var _a;
//# sourceMappingURL=contact-api-storage.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactLocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactLocalStorageService = (function () {
    function ContactLocalStorageService() {
        this.testListIsNeeded = false;
        this.contactLocalStorageKey = 'ca-storageKey';
        if (!localStorage.getItem(this.contactLocalStorageKey)) {
            localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
            if (this.testListIsNeeded) {
                this.mekeTestList();
                this.saveContactsToLocalStorage();
            }
        }
    }
    ContactLocalStorageService.prototype.findContacts = function () {
        var data = localStorage.getItem(this.contactLocalStorageKey);
        this.contacts = JSON.parse(data);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.contacts);
    };
    ContactLocalStorageService.prototype.addNewContact = function (contact) {
        var nextId = 100;
        if (this.contacts.length > 0) {
            nextId = __WEBPACK_IMPORTED_MODULE_3_lodash__["maxBy"](this.contacts, 'id').id;
            nextId++;
        }
        contact.id = nextId;
        this.contacts.push(contact);
        this.saveContactsToLocalStorage();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.contacts);
    };
    ContactLocalStorageService.prototype.editContact = function (contact) {
        var index = this.contacts.findIndex(function (c) { return c.id == contact.id; });
        this.contacts[index] = contact;
        this.saveContactsToLocalStorage();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.contacts);
    };
    ContactLocalStorageService.prototype.deleteContact = function (contact) {
        var editList = [];
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id != contact.id) {
                editList.push(this.contacts[i]);
            }
        }
        this.contacts = editList;
        this.saveContactsToLocalStorage();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.contacts);
    };
    ContactLocalStorageService.prototype.saveContactsToLocalStorage = function () {
        localStorage.setItem(this.contactLocalStorageKey, JSON.stringify(this.contacts));
    };
    ContactLocalStorageService.prototype.mekeTestList = function () {
        this.contacts = [
            new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](1, 'Mauno', 'Mäki', '+358 991 123', 'Ääkköskuja 58 b 9', 'Åålandia'),
            new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](2, 'Bruce', 'Wayne', '555-1234', 'Wayne Manor', 'Gotham City'),
            new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](3, 'Mikki', 'Hiiri', '888 12332', 'Torikatu 5', 'Ankkalinna'),
            new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](8, 'Aku', 'Ankka', '456-789789', 'Paratiisitie 13', 'Ankkalinna')
        ];
    };
    return ContactLocalStorageService;
}());
ContactLocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContactLocalStorageService);

//# sourceMappingURL=contact-local-storage.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(localStorage, apiService) {
        this.localStorage = localStorage;
        this.apiService = apiService;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].envName == 'api') {
            this.storageInterface = apiService;
        }
        else {
            this.storageInterface = localStorage;
        }
    }
    ContactService.prototype.findAllContacts = function () {
        return this.storageInterface.findContacts();
    };
    ContactService.prototype.addNewContact = function (contact) {
        return this.storageInterface.addNewContact(contact);
    };
    ContactService.prototype.editContact = function (contact) {
        return this.storageInterface.editContact(contact);
    };
    ContactService.prototype.deleteContact = function (contact) {
        return this.storageInterface.deleteContact(contact);
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__["a" /* ContactLocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__["a" /* ContactLocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__["a" /* ContactApiStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__["a" /* ContactApiStorageService */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialogs_contact_dialog_contact_dialog_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_dialog_map_dialog_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.contactDialog = function (contact) {
        console.log('This is dialog service contactDialog method message :)');
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */]);
        dialogRef.componentInstance.contactInn = contact;
        return dialogRef.afterClosed();
    };
    DialogService.prototype.openMap = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]);
        dialogRef.componentInstance.contact = contact;
        return dialogRef.afterClosed();
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.bundle.js.map