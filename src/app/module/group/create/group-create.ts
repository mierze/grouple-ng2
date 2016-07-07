import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    templateUrl: 'group-create.html'
    // directives: [ROUTER_DIRECTIVES]
})
export class GroupCreate {
    name: string;
    groups: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.groups = af.database.list('groups');
    }
    create() {
        this.groups.push({ name: this.name });
    }
    //
    //

} //end group create controller
