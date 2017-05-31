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
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  books: Book[];

  @ViewChild(BookComponent) myChild: BookComponent;
  private subcription: Subscription;

  constructor() { }


  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3)
    ];
  }


  ngAfterViewInit() {
    this.subcription = this.myChild.rated
      .filter(book => book.title === 'Angular')
      .subscribe((book: Book) => {
        console.log('wurde geklickt', book.title);
      });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
