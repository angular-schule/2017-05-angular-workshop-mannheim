import { Book } from './book';

describe('Rating a Book', () => {

  let book: Book;

  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should rate up by 1', () => {
    book.rating = 0;
    book.rateUp();
    expect(book.rating).toBe(1);
  });

  it('should rate down by 1', () => {
    book.rating = 1;
    book.rateDown();
    expect(book.rating).toBe(0);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be possible to have a rating smaller than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toBe(0);
  });
});
