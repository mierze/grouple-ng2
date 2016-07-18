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
var toolbar_1 = require('@angular2-material/toolbar');
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
var card_1 = require('@angular2-material/card');
// import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
var angularfire2_1 = require('angularfire2');
var router_1 = require('@angular/router');
var index_1 = require('./module/index');
var App = (function () {
    function App(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'Grouple';
        this.uid = '';
        auth.subscribe(function (auth) {
            if (auth)
                _this.uid = auth.uid;
        });
    }
    App.prototype.login = function () {
        this.auth.login();
    };
    App.prototype.logout = function () {
        this.auth.logout();
    };
    App = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.html',
            styleUrls: ['app.css'],
            directives: [button_1.MD_BUTTON_DIRECTIVES, card_1.MD_CARD_DIRECTIVES,
                icon_1.MdIcon, toolbar_1.MdToolbar, router_1.ROUTER_DIRECTIVES],
            providers: [icon_1.MdIconRegistry, index_1.UserService]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.FirebaseAuth])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map