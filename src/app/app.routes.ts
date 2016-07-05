import { provideRouter, RouterConfig } from '@angular/router';
import { Home, GroupsLanding, EventsLanding, UserProfile, GroupProfile, EventProfile } from './module/index';

// import { GroupProfile } from './module';
// import { EventProfile } from './module';
export const routes: RouterConfig = [
    { path: '', component: Home },
    { path: 'groups', component: GroupsLanding },
    { path: 'events', component: EventsLanding },
    { path: 'user-profile', component: UserProfile },
    { path: 'group-profile', component: GroupProfile },
    { path: 'event-profile', component: EventProfile }

];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
