import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl: 'group-list.html',
    styleUrls: ['group-list.css', '../../shared/styles/buttons.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class GroupList {
    groups: FirebaseListObservable<any[]>;
    gs: FirebaseObjectObservable<any>;
    af:AngularFire;
    sub: any;
    constructor(private route: ActivatedRoute, af: AngularFire) {
      this.af = af;
        this.gs = this.af.database.object('groups/1');
        this.sub = this.route.params.subscribe(params => {
            let id:string = params['id']; // (+) converts string 'id' to a number
            console.log(id);
            this.groups = af.database.list('users/' + id + '/groups');
        });
    }

    getName(id: string): FirebaseObjectObservable<any> {
      let gd:FirebaseObjectObservable<any>;
      // gd = this.af.database.object('groups/' +id);
      return gd;
    }


} //end group list controller
