import { CrabfinderPage } from './app.po';

describe('crabfinder App', function() {
  let page: CrabfinderPage;

  beforeEach(() => {
    page = new CrabfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
