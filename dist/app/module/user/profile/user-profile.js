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
var angularfire2_1 = require('angularfire2');
var router_1 = require('@angular/router');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var icon_1 = require('@angular2-material/icon');
var UserProfile = (function () {
    function UserProfile(route, router, af) {
        this.route = route;
        this.router = router;
        this.af = af;
        this.uid = '';
        this.profileImg = "https://material.angularjs.org/material2_assets/ngconf/Mal.png";
    }
    UserProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.uid = id;
            _this.user = _this.af.database.object('users/' + id);
        });
    };
    UserProfile = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'user-profile.html',
            styleUrls: ['user-profile.css' /*, '../../shared/styles/buttons.css'*/],
            directives: [
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                //  MdInput,
                //  MdCheckbox,
                icon_1.MdIcon,
                router_1.ROUTER_DIRECTIVES
            ], providers: [icon_1.MdIconRegistry],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, angularfire2_1.AngularFire])
    ], UserProfile);
    return UserProfile;
}());
exports.UserProfile = UserProfile;
//# sourceMappingURL=user-profile.js.map