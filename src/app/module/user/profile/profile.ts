import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: 'profile.html',
    styleUrls: ['profile.css']
})
export class UserProfile {
    constructor() { }
    // $rootScope, $stateParams, UserProfileGetter, UserImageGettercontroller.ts
    // let storage = window.localStorage;
    // private info: any = {};
    //
    // //functions
    //  init() {
    //   vm.post = {};
    //   vm.privs = {};
    //   vm.privs.admin = true;
    //   //case that id is for logged user's email
    //   if ($stateParams.email == 'user')
    //     vm.email = storage.getItem('email');
    //   else if($stateParams.email !== null)
    //     vm.email = $stateParams.email;
    //   else
    //     alert('No email specified!');
    //   getProfile();
    // } //end init function
    //  toggleEdit() {
    //   if (vm.showEdit)
    //     vm.showEdit = false;
    //   else
    //     vm.showEdit = true;
    // } //end toggle edit
    //  getProfile() {
    //   //vessell 40k
    //   UserProfileGetter.get(vm.email, function setProfile(data) {
    //     if (data['success'] === 1) {
    //       //fetched successfully
    //       vm.info = data.data;
    //       $rootScope.$broadcast('setTitle', (vm.info.first + ' ' + vm.info.last));
    //       //check for unset data
    //       if (vm.info.birthday == null)
    //         vm.birthdayNull = true;
    //       else { //parse age from birthday
    //         //TODO seperate date parsing to a factory
    //         var birthday = new Date(vm.info.birthday); //to date
    //         vm.info.year = birthday.getFullYear();
    //         vm.info.month = birthday.getMonth()+1;
    //         vm.info.day = birthday.getDay()+1;
    //         var difference = new Date - birthday;
    //         vm.info.age = Math.floor((difference / 1000/*ms*/ / (60/*s*/ * 60/*m*/ * 24/*hr*/)) / 365.25/*day*/);
    //       }
    //       if (vm.info.about == null)
    //         vm.aboutNull = true;
    //       if (vm.info.location == null)
    //         vm.locationNull = true;
    //       //end check for unset data
    //     }
    //     else //generic catch
    //       alert(data['message']);
    //   }); //end set profile
    //   UserImageGetter.get(vm.email, function setImage(data) {
    //     if (data['success'] === 1) {
    //       if (data.image < 10  || data.image == null)
    //         vm.imageNull = true;
    //       else {
    //         var imgUrl = 'data:image/png;base64,' + data.image;
    //         vm.image = imgUrl;
    //       }
    //     }
    //     else { //generic catch
    //       vm.imageNull = true;
    //       alert(data['message']);
    //     }
    //   }); //end set image
    // } //end get profile
} //end user profile controller
