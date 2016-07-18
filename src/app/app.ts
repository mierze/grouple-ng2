import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
import { AngularFire, FirebaseAuth } from 'angularfire2';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './module/index'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES,
    MdIcon, MdToolbar, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry, UserService]
})
export class App {
  title: string = 'Grouple';
  uid: string = '';
  constructor(public auth: FirebaseAuth) {
    auth.subscribe(auth => {
      if (auth) this.uid = auth.uid;
    });
  }
  login() {
    this.auth.login();

  }
  logout() {
    this.auth.logout();
  }
}
