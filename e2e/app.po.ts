export class GroupleNg2Page {
    navigateTo() {
        return browser.get('/');
    }

    getTitle() {
        return element(by.css('app-root .nav .title')).getText();
    }
}
