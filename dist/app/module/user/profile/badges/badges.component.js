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
var list_1 = require('@angular2-material/list');
var angularfire2_1 = require('angularfire2');
var BadgesComponent = (function () {
    function BadgesComponent(af, auth) {
        this.af = af;
        this.auth = auth;
        this.badges = af.database.list('users/1/badges');
    }
    BadgesComponent.prototype.ngOnInit = function () { };
    BadgesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'badges',
            templateUrl: 'badges.component.html',
            styleUrls: ['badges.component.css'],
            directives: [list_1.MD_LIST_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, angularfire2_1.FirebaseAuth])
    ], BadgesComponent);
    return BadgesComponent;
}());
exports.BadgesComponent = BadgesComponent;
//# sourceMappingURL=badges.component.js.map