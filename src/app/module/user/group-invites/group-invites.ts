import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'group-invites.html',
  styleUrls: ['../../shared/styles/buttons.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class GroupInvites {

  // groups: FirebaseObjectObservable<any>;
    invites: FirebaseListObservable<any>;
    sub: any;
    constructor(private route: ActivatedRoute, private router: Router, af: AngularFire) {
      this.sub = this.route.params.subscribe(params => {
        let id = params['id']; // (+) converts string 'id' to a number
        this.invites = af.database.list('users/'+id+'/group-invites');
      });
    }
}
