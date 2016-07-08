/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var app_1 = require('./app');
testing_1.beforeEachProviders(function () { return [app_1.App]; });
testing_1.describe('App: Grouple', function () {
    testing_1.it('should create the app', testing_1.inject([app_1.App], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'Grouple\'', testing_1.inject([app_1.App], function (app) {
        testing_1.expect(app.title).toEqual('Grouple');
    }));
});
//# sourceMappingURL=app.spec.js.map