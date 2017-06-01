import { Book } from './../shared/book';
import { NgForm } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent {
  book: Book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  @ViewChild(NgForm)
  createForm: NgForm;

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.createForm.reset(this.book);
  }
}
