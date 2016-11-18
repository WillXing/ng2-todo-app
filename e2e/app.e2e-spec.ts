import { FrontendAngular2Page } from './app.po';

describe('frontend-angular-2 App', function() {
  let page: FrontendAngular2Page;

  beforeEach(() => {
    page = new FrontendAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
