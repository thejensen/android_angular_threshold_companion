import { AngularThresholdPage } from './app.po';

describe('angular-threshold App', function() {
  let page: AngularThresholdPage;

  beforeEach(() => {
    page = new AngularThresholdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
