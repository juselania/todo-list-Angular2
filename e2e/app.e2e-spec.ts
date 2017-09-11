import { Angular2CRUDPage } from './app.po';

describe('angular2-crud App', () => {
  let page: Angular2CRUDPage;

  beforeEach(() => {
    page = new Angular2CRUDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
