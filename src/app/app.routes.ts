import { provideRouter, RouterConfig } from '@angular/router';
import { Home, GroupLanding, EventLanding, UserProfile, GroupProfile, EventProfile, GroupList, EventList, GroupCreate, EventCreate, GroupInvite, GroupInvites, GroupMessages } from './module/index';

// import { GroupProfile } from './module';
// import { EventProfile } from './module';
export const routes: RouterConfig = [
    { path: '', component: Home },
    { path: 'groups', component: GroupLanding },
    { path: 'events', component: EventLanding },
    { path: 'user-profile/:id', component: UserProfile },
    { path: 'group-profile/:id', component: GroupProfile },
    { path: 'event-profile/:id', component: EventProfile },
    { path: 'group-list', component: GroupList },
    { path: 'event-list', component: EventList },
    { path: 'group-create', component: GroupCreate },
    { path: 'event-create', component: EventCreate },
    { path: 'group-invite', component: GroupInvite },
    { path: 'group-invites/:id', component: GroupInvites },
    { path: 'group-messages/:id', component: GroupMessages }

];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
