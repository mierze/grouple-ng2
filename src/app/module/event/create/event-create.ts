import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'event-create.html',
  directives: [ROUTER_DIRECTIVES]
})
export class EventCreate {
  event: any = {}
  key: string = '';
  events: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.events = af.database.list('events');
  }
  create() {
    this.key = this.events.push(this.event);
    let split = this.key.split('/');
    this.key = split[split.length-1];
  }
} //end event create controller
