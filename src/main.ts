import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { App, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
    enableProdMode();
}

bootstrap(App, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);
