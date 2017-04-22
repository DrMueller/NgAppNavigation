import { NgAppNavigationPage } from './app.po';

describe('ng-app-navigation App', () => {
  let page: NgAppNavigationPage;

  beforeEach(() => {
    page = new NgAppNavigationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
