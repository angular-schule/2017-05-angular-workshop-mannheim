import { Book } from './../shared/book';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

  rateUp() {
    this.book.rateUp();
  }

  rateDown() {
    this.book.rateDown();
  }

  get rating(): number[] {
    // console.log('Change Detection');
    return new Array(this.book.rating);
  }
}
