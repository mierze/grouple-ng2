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
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var router_1 = require('@angular/router');
var Home = (function () {
    function Home() {
        //SessionChecker.check(1);
        this.title = 'Grouple';
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/module/home/home.html',
            styleUrls: ['app/module/home/home.css'],
            directives: [icon_1.MdIcon, button_1.MD_BUTTON_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map