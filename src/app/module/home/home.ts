import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
    items: FirebaseListObservable<any[]>;
    msg: string;
    title: string = 'Grouple';
    constructor(af: AngularFire) {
        this.items = af.database.list('messages');
    }

    addItem() {
        this.items.push({ data: this.msg });
    }
    removeItem(key: any) {
        this.items.remove(key);
    }
}
