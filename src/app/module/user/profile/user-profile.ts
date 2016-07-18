import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    moduleId: module.id,
    templateUrl: 'user-profile.html',
    styleUrls: ['user-profile.css'/*, '../../shared/styles/buttons.css'*/],
    directives: [
   MD_LIST_DIRECTIVES,
   MD_CARD_DIRECTIVES,
   MdToolbar,
   MdButton,
  //  MdInput,
  //  MdCheckbox,
   MdIcon,
   ROUTER_DIRECTIVES
 ], providers: [MdIconRegistry],
})
export class UserProfile implements OnInit {
    user: FirebaseObjectObservable<any>;
    uid: string = '';
    sub: any;
    profileImg: string = "https://material.angularjs.org/material2_assets/ngconf/Mal.png";
    constructor(private route: ActivatedRoute, private router: Router, public af: AngularFire) {
    }

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    let id:string = params['id']; // (+) converts string 'id' to a number
    this.uid = id;
    this.user = this.af.database.object('users/' + id);
  });
}
}
