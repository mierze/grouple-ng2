/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BadgesComponent } from './badges.component';

describe('Component: Badges', () => {
  it('should create an instance', () => {
    let component = new BadgesComponent(null, null);
    expect(component).toBeTruthy();
  });
});
