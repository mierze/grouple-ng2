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
var index_1 = require('../../../shared/index');
var GroupMessages = (function () {
    function GroupMessages(route, router, af, _userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._userService = _userService;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.messages = af.database.list('groups/' + id + '/messages');
        });
    }
    GroupMessages.prototype.send = function () {
        this.messages.push({ from: this._userService.getUID(), message: this.message });
        this.message = '';
    };
    GroupMessages = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'group-messages.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, angularfire2_1.AngularFire, index_1.UserService])
    ], GroupMessages);
    return GroupMessages;
}());
exports.GroupMessages = GroupMessages;
//# sourceMappingURL=group-messages.js.map