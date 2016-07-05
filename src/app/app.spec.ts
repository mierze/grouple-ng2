/* tslint:disable:no-unused-variable */

import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';
import { App } from './app';

beforeEachProviders(() => [App]);

describe('App: Grouple', () => {
    it('should create the app',
        inject([App], (app: App) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'Grouple\'',
        inject([App], (app: App) => {
            expect(app.title).toEqual('Grouple');
        }));
});
