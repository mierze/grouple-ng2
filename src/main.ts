import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { App, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
    enableProdMode();
}

bootstrap(App, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, FIREBASE_PROVIDERS, defaultFirebase({
    apiKey: "AIzaSyBxA_S-Hdj4CDEqHkuswU-6oYP1b_fvOmc",
    authDomain: "grouple-e1e21.firebaseapp.com",
    databaseURL: "https://grouple-e1e21.firebaseio.com",
    storageBucket: "",
}),
firebaseAuthConfig({
   provider: AuthProviders.Google,
   method: AuthMethods.Popup
})]);
