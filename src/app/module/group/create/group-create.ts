import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    templateUrl: 'group-create.html'
})
export class GroupCreate {
    group: any = {}
    groups: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.groups = af.database.list('groups');
    }
    create() {
        this.groups.push(this.group);
    }
    //
    //

} //end group create controller
