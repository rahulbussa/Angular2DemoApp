import { ContactCardPage } from './app.po';

describe('contact-card App', function() {
  let page: ContactCardPage;

  beforeEach(() => {
    page = new ContactCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
