import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
    directives: [MdIcon, MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class Home {
    //SessionChecker.check(1);

    items: FirebaseListObservable<any[]>;
    users: FirebaseListObservable<any[]>;
    msg: string;
    title: string = 'Grouple';
    user:any;
    constructor(public af: AngularFire, public auth: FirebaseAuth) {
        this.items = af.database.list('messages');
        this.users = af.database.list('users');
    }

    login() {
//       let provider = new this.af.auth.FacebookAuthProvider();
//       this.af.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
      this.auth.login();
}
logout() {
  this.auth.logout();
}
    addItem() {
        this.items.push({ data: this.msg });
    }
    removeItem(key: any) {
        this.items.remove(key);
    }
}
