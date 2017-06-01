import { BookStoreService } from './../shared/book-store.service';
import { Subscription } from 'rxjs/Rx';
import { AfterViewInit, OnDestroy } from '@angular/core/core';
import { BookComponent } from './../book/book.component';
import { Book } from './../shared/book';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  @ViewChild(BookComponent) myChild: BookComponent;
  private subcription: Subscription;

  constructor(public bs: BookStoreService) {

  }

  ngOnInit() {
    this.bs
      .getAllBooks()
      .subscribe(books => this.books = books);


      this.bs.delete('222').subscribe();
  }

  add(book: Book) {
    this.books.push(book);
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
