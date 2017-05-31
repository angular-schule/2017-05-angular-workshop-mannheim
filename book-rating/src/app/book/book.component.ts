import { Book } from './../shared/book';
import { Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;

  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  get rating(): number[] {
    return new Array(this.book.rating);
  }
}
