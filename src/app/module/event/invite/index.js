import { Component } from '@angular/core';
;
module.exports = angular.module('adder.event.invite', [])
  .controller('EventInviteController', require('./controller'))
  .directive('eventInviteRow', require('./part/invite-row.directive'));