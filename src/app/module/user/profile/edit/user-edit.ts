import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  templateUrl: 'user-edit.html'
})
export class UserEdit {
  user: FirebaseObjectObservable<any>;
  u: any;
  uid: string;
  constructor(public route: ActivatedRoute, public af: AngularFire) {
  }
  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.uid = params['id']; // (+) converts string 'id' to a number
      this.user = this.af.database.object('users/' + this.uid);
      this.user.subscribe(user => {

        if (user) this.u = user;
        console.log(JSON.stringify(user));
      });
    });
  }

  save() {
    alert(JSON.stringify(this.u));
    this.user.set( this.u );
  }



} //end user edit directive
