import { browser, element, by } from 'protractor';

fdescribe('Bridging IT homepage', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  const year = 2016;
  it('should show the correct copyright text in the footer', () => {

    // browser.driver.manage().window().setSize(100, 100);

    // debugger;

    browser.get('http://www.bridging-it.de/');
    const footerElement = element(by.css('footer .muted.hidden-xs'));

    expect(footerElement.getText()).toContain(`Copyright © ${year} BridgingIT GmbH`);
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
