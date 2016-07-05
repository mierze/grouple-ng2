import { GroupleNg2Page } from './app.po';

describe('grouple-ng2 App', function() {
    let page: GroupleNg2Page;

    beforeEach(() => {
        page = new GroupleNg2Page();
    });

    it('should display title in nav bar on home screen', () => {
        page.navigateTo();
        expect(page.getTitle()).toEqual('Grouple');
    });

    it('should have 3 buttons, each in a column', () => {
        page.navigateTo();
        element.all(by.className('col')).count().then(function(count) {
            expect(count).toEqual(3);
        });
    });


});
