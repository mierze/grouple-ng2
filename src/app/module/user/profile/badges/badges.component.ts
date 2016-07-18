import { Component, OnInit } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import { AngularFire, FirebaseObjectObservable, FirebaseAuth, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'badges',
  templateUrl: 'badges.component.html',
  styleUrls: ['badges.component.css'],
  directives: [MD_LIST_DIRECTIVES]
})
export class BadgesComponent implements OnInit {
  badges: FirebaseListObservable<any[]>;

  constructor( public af: AngularFire, public auth: FirebaseAuth) {
    this.badges = af.database.list('users/1/badges');
  }

  ngOnInit() {}

}
