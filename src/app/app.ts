import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
// import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['app.css'],
    directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES,
        MdIcon, MdToolbar, ROUTER_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class App {
    title: string = 'Grouple';
    item: FirebaseObjectObservable<any>;
    // items: FireBaseListObservable<any[]>;
    constructor(af: AngularFire) {
        // alert(relative.thing);
        // this.items = af.database.grouple-e1e21.list();
    }
}
