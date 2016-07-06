"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./module/index');
// import { GroupProfile } from './module';
// import { EventProfile } from './module';
exports.routes = [
    { path: '', component: index_1.Home },
    { path: 'groups', component: index_1.GroupsLanding },
    { path: 'events', component: index_1.EventsLanding },
    { path: 'user-profile', component: index_1.UserProfile },
    { path: 'group-profile', component: index_1.GroupProfile },
    { path: 'event-profile', component: index_1.EventProfile }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map