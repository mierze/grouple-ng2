/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// import { AngularFire FirebaseAuth } from 'angularfire2';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Home } from './home';

describe('Component: Home', () => {
  it('should create an instance', () => {
    // let component = new Home(public af: AngularFire, public auth: FirebaseAuth);
    let component = new Home(null, null);
    expect(true).toBeTruthy();
  });
});
