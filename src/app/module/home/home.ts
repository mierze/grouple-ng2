import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
    directives: [MdIcon, MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class Home {
    //SessionChecker.check(1);
    title: string = 'Grouple';
    constructor() { }
}
