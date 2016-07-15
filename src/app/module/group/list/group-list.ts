import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../../../shared';
@Component({
    moduleId: module.id,
    templateUrl: 'group-list.html',
    styleUrls: ['group-list.css', '../../shared/styles/buttons.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class GroupList {
    groups: FirebaseListObservable<any[]>;
    gs: FirebaseObjectObservable<any>;
    af:AngularFire;
    constructor(af: AngularFire, us: UserService) {
      this.af = af;
        this.groups = af.database.list('users/1/groups');
        this.gs = this.af.database.object('groups/1');

    }


    getName(id: string): FirebaseObjectObservable<any> {
      let gd:FirebaseObjectObservable<any>;
      gd = this.af.database.object('groups/' +id);
      return gd;
    }

    // $rootScope, $stateParams, GroupListGetter

    // vm.setTitle = setTitle;
    // vm.getGroups = getGroups;
    // vm.content = $stateParams.content;
    // if ($stateParams.id == null)
    //   vm.email = storage.getItem('email');
    // else
    //   vm.email = $stateParams.id;
    //
    // //initialize
    // vm.getGroups();
    // vm.setTitle();
    //
    // //functions
    // function setTitle(content) {
    //   if (vm.content === 'invites') {
    //     //editable check
    //     vm.invite = true;
    //     vm.title = 'Group Invites';
    //   }
    //   else if (vm.content === 'groups-attending')
    //     vm.title = 'Groups Attending';
    //   else
    //     vm.title = 'Groups';
    //   $rootScope.$broadcast('setTitle', vm.title);
    // }
    // function getGroups() {
    //   alert('now in get groups');
    //   GroupListGetter.get(vm.email, vm.content, function setGroups(data) {
    //     if (data['success'] === 1)
    //       vm.items = data['data'];
    //     else if (data['success'] === 0)
    //       vm.sadGuy = true;
    //     else
    //       alert(data['message']);
    //   }); //end get groups
    // }
} //end group list controller
