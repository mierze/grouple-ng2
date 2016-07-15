import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.html'
})
export class EventProfile {
  event: FirebaseObjectObservable<any>;
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router, af: AngularFire) {


      this.sub = this.route.params.subscribe(params => {
          // let id = +params['id']; // (+) converts string 'id' to a number
          this.event = af.database.object('events/' + params['id']);
      });
    }
} //end event profile
