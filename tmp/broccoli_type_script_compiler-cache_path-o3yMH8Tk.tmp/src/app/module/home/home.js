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
var angularfire2_1 = require('angularfire2');
var Home = (function () {
    function Home(af, auth) {
        this.af = af;
        this.auth = auth;
        this.title = 'Grouple';
        this.items = af.database.list('messages');
        this.users = af.database.list('users');
    }
    Home.prototype.login = function () {
        //       let provider = new this.af.auth.FacebookAuthProvider();
        //       this.af.auth().signInWithPopup(provider).then(function(result) {
        //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //   var token = result.credential.accessToken;
        //   // The signed-in user info.
        //   var user = result.user;
        //   // ...
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // The email of the user's account used.
        //   var email = error.email;
        //   // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        //   // ...
        // });
        this.auth.login();
    };
    Home.prototype.logout = function () {
        this.auth.logout();
    };
    Home.prototype.addItem = function () {
        this.items.push({ data: this.msg });
    };
    Home.prototype.removeItem = function (key) {
        this.items.remove(key);
    };
    Home = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.html',
            styleUrls: ['home.css'],
            directives: [icon_1.MdIcon, button_1.MD_BUTTON_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, angularfire2_1.FirebaseAuth])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map