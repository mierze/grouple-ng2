import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'group-invite.html'
})
export class GroupInvite {
  email: string;
  send() {
    alert("Invite Sent to " + this.email);
  }
}
