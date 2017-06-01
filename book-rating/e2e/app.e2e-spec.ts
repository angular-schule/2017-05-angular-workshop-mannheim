import { BookRatingPage } from './app.po';
import { browser } from 'protractor';

describe('book-rating App', () => {
  let page: BookRatingPage;

  beforeEach(() => {
    page = new BookRatingPage();
  });

  it('should display the title', () => {
    page.navigateTo();

    //browser.pause(); // !

    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
