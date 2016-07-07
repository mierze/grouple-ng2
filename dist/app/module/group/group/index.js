import { Component } from '@angular/core';
;
module.exports = angular.module('adder.group', [
    require('./create').name,
    require('./invite').name
]);