"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./module/index');
// import { GroupProfile } from './module';
// import { EventProfile } from './module';
exports.routes = [
    { path: '', component: index_1.Home },
    { path: 'groups', component: index_1.GroupsLanding },
    { path: 'events', component: index_1.EventsLanding },
    { path: 'user-profile/:id', component: index_1.UserProfile },
    { path: 'group-profile', component: index_1.GroupProfile },
    { path: 'event-profile', component: index_1.EventProfile },
    { path: 'group-list', component: index_1.GroupList },
    { path: 'event-list', component: index_1.EventList },
    { path: 'group-create', component: index_1.GroupCreate }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map