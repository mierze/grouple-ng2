"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var home_component_1 = require('./module/landing/home/home.component');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
var card_1 = require('@angular2-material/card');
// import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
// import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Grouple';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [home_component_1.HomeComponent, button_1.MD_BUTTON_DIRECTIVES, card_1.MD_CARD_DIRECTIVES,
                icon_1.MdIcon, toolbar_1.MdToolbar],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map