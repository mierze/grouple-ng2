import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/module/group/profile/profile.html'
})
export class GroupProfile {
    constructor() { }
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
