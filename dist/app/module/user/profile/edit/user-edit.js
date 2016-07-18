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
var router_1 = require('@angular/router');
var angularfire2_1 = require('angularfire2');
var UserEdit = (function () {
    function UserEdit(route, af) {
        this.route = route;
        this.af = af;
    }
    UserEdit.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            _this.uid = params['id']; // (+) converts string 'id' to a number
            _this.user = _this.af.database.object('users/' + _this.uid);
            _this.user.subscribe(function (user) {
                if (user)
                    _this.u = user;
                console.log(JSON.stringify(user));
            });
        });
    };
    UserEdit.prototype.save = function () {
        alert(JSON.stringify(this.u));
        this.user.set(this.u);
    };
    UserEdit = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'user-edit.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, angularfire2_1.AngularFire])
    ], UserEdit);
    return UserEdit;
}());
exports.UserEdit = UserEdit; //end user edit directive
//# sourceMappingURL=user-edit.js.map