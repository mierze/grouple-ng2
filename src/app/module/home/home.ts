import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseAuth } from 'angularfire2';
import { UserService } from '../shared/index'

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  directives: [MdIcon, MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry]
})
export class Home implements OnInit {
  title: string = 'Grouple';
  user: string = '';
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.user = this._userService.getUID();

  }
}
