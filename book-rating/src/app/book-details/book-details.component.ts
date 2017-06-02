import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn$: Observable<string>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.isbn = this.route.snapshot.params.isbn;

    // this.route.params.subscribe(params => {
    //   this.isbn = params.isbn;
    // });

    this.isbn$ =
      this.route.params
      .map(params => params.isbn);
  }
}
