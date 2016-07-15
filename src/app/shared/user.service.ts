import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  store: any = window.localStorage;
  user: string;
  constructor() {
    this.user = '1';
  }

  getUser(): string {
    return this.user;
  }
  
  setUser(u: string): void {
    this.user = u;
  }
}
