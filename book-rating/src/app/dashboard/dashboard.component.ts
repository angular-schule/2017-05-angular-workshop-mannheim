import { Book } from './../shared/book';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3)
    ]
  }

  reorderBooks(book: Book) {
    console.log('Buch wurde bewertet', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
