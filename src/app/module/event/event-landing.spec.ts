/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventLanding } from './event-landing';

describe('Component: Landing', () => {
  it('should create an instance', () => {
    let component = new EventLanding();
    expect(component).toBeTruthy();
  });
});
