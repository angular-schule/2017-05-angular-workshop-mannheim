import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

  });

  it('should rate the Book up when the controller rateUp() was called', () => {

    component.book = {
      rateUp: () => { },
      rateDown: () => {}
    } as Book;

    spyOn(component.book, 'rateUp');

    component.rateUp();
    expect(component.book.rateUp).toHaveBeenCalled();

    fixture.detectChanges();
  });
});
