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
var GroupInvites = (function () {
    function GroupInvites(route, router, af) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.invites = af.database.list('users/' + id + '/group-invites');
        });
    }
    GroupInvites = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'group-invites.html',
            styleUrls: ['../../shared/styles/buttons.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, angularfire2_1.AngularFire])
    ], GroupInvites);
    return GroupInvites;
}());
exports.GroupInvites = GroupInvites;
//# sourceMappingURL=group-invites.js.map