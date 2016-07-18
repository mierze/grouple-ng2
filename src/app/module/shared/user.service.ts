import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class UserService {
  uid: string = '';
  constructor(public auth: FirebaseAuth) {
    auth.subscribe(auth => {
      console.log(auth);
      if (auth) this.uid = auth.uid;
    });


  }

  getUID(): string {
    return this.uid;
  }
}
