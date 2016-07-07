import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'landing.html',
    styleUrls: ['../shared/styles/landings.css'],
    directives: [MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class EventsLanding {
    title: string = 'Events';
    constructor() { }
}
