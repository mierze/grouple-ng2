"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require('@angular/http');
var angularfire2_1 = require('angularfire2');
var app_routes_1 = require('./app/app.routes');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.App, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS, angularfire2_1.FIREBASE_PROVIDERS, angularfire2_1.defaultFirebase({
        apiKey: "AIzaSyBxA_S-Hdj4CDEqHkuswU-6oYP1b_fvOmc",
        authDomain: "grouple-e1e21.firebaseapp.com",
        databaseURL: "https://grouple-e1e21.firebaseio.com",
        storageBucket: "",
    }),
    angularfire2_1.firebaseAuthConfig({
        provider: angularfire2_1.AuthProviders.Google,
        method: angularfire2_1.AuthMethods.Popup
    })]);
//# sourceMappingURL=main.js.map