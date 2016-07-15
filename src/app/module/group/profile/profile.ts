import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.html',
  styleUrls: ['profile.css', '../../shared/styles/buttons.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class GroupProfile {

  group: FirebaseObjectObservable<any>;
  sub: any;
  id: string;
  constructor(private route: ActivatedRoute, private router: Router, af: AngularFire) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.group = af.database.object('groups/' + this.id);

    });
  }
  // let storage = window.localStorage;
  // private showEdit = false;
  // private info = {};
  // private privs = {mod: true, admin: true};
  //
  // //functions
  // init() {
  //   if($stateParams.id !== null) {
  //     vm.id = $stateParams.id;
  //     getProfile();
  //   }
  //   else
  //    alert('Invalid group ID, please go back and try again.');
  // } //end init
  // toggleEdit() {
  //   if (vm.showEdit)
  //     vm.showEdit = false;
  //   else
  //     vm.showEdit = true;
  // }
  // getProfile() {
  //   GroupProfileGetter.get(vm.id, function setProfile(data) {
  //     alert(JSON.stringify(data));
  //     if (data['success'] === 1) {
  //       alert(JSON.stringify(data.data[0]));
  //       //TODO set for now. next get from api
  //       vm.editable = true;
  //       vm.info = data.data;
  //       $rootScope.$broadcast('setTitle', vm.info.name);
  //       alert('cooking');
  //     }
  //     else //generic catch
  //       alert(data['message']);
  //   }); //end fetch profile
  //   GroupImageGetter.get(vm.id, function setImage(data) {
  //     if (data['success'] === 1) {
  //       var imgUrl = 'data:image/png;base64,' + data['image'];
  //       vm.image = imgUrl;
  //     }
  //     else {
  //       //generic catch
  //       vm.imageNull = true;
  //       alert(data['message']);
  //     }
  //   });
  // } //end get profile
} //end group profile controller
