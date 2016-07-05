import { Component } from '@angular/core';
@Component({
    templateUrl: 'app/module/event/profile/profile.html'
})
export class EventProfile {
    // private type:string = 'event';
    // private privs:any = {admin: true, mod: true};
    // private showEdit:boolean = false;
    //
    //
    // //functions
    // init() {
    //   if($stateParams.id !== null) {
    //     vm.id = $stateParams.id;
    //     getProfile();
    //   }
    //   else
    //     alert('ID not specified.');
    //   getProfile();
    // } //end init
    // toggleEdit() {
    //   if (vm.showEdit)
    //     vm.showEdit = false;
    //   else
    //     vm.showEdit = true;
    // } //end toggle edit
    // getProfile() {
    //   EventProfileGetter.get(vm.id, function setProfile(data) {
    //     if (data['success'] === 1) {
    //       vm.editable = true;
    //       vm.info = data.data;
    //       $rootScope.$broadcast('setTitle', vm.info.name);
    //     }
    //     else //generic catch
    //       alert(data['message']);
    //   }); //end fetch profile
    //   EventImageGetter.get(vm.id, function setImage(data) {
    //     if (data['success'] === 1) {
    //       vm.image = 'data:image/png;base64,' + data['image'];
    //     }
    //     else {
    //       //generic catch
    //       vm.imageNull = true;
    //       alert(data['message']);
    //     }
    //   });
    // } //end get profile
} //end event profile controller
