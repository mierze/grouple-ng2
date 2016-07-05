import { Component } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
    moduleId: module.id,
    templateUrl: 'landing.html',
    styleUrls: ['../shared/styles/landings.css'],
    directives: [MD_BUTTON_DIRECTIVES]
})
export class EventsLanding {
    private title: string = 'Events';
    constructor() { }
}
