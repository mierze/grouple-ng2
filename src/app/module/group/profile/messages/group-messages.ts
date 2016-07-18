import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute,ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../../../shared/index';

@Component({
  moduleId: module.id,
  templateUrl: 'group-messages.html'
})
export class GroupMessages {
  // groups: FirebaseObjectObservable<any>;
    messages: FirebaseListObservable<any>;
    message: string;
    sub: any;
    constructor(private route: ActivatedRoute, private router: Router, af: AngularFire, private _userService: UserService) {
      this.sub = this.route.params.subscribe(params => {
        let id = params['id']; // (+) converts string 'id' to a number
        this.messages = af.database.list('groups/'+id+'/messages');
      });
    }

    send() {
        this.messages.push({ from: this._userService.getUID(), message: this.message });
        this.message = '';
    }

}
