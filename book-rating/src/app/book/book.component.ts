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
    //4window.setInterval(function() { console.log('adsasd') }, 1);
  }

  ngOnInit() {
   // throw "asdasd";
  }

}
