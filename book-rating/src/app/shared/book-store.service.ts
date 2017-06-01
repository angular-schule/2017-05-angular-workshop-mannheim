import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class BookStoreService {

  constructor(public http: Http) { }

  getAllBooks(): Observable<Book[]> {

    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books')
      .retry(5)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map((r) => new Book(r.isbn, r.title, r.description, r.rating)));
  }

  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`https://book-monkey2-api.angular-buch.com/book/${isbn}`);
  }
}
