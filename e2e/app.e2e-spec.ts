import { Ng2PrimeNumber100Page } from './app.po';

describe('ng2-prime-number100 App', function() {
  let page: Ng2PrimeNumber100Page;

  beforeEach(() => {
    page = new Ng2PrimeNumber100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
