import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-book',
  standalone: true,
  template: '😄'
})
export class DummyBookComponent {
  @Input() book?: Book;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {

    const bookRatingMock = {
      rateUp: (book: Book) => book
    };

    TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [{
        provide: BookRatingService,
        useValue: bookRatingMock
      }]
    })
    // .overrideComponent(DashboardComponent, {
    //   set: { imports: [NgFor], schemas: [NO_ERRORS_SCHEMA] } // Shallow Component Test
    // });
    .overrideComponent(DashboardComponent, {
      set: { imports: [NgFor, DummyBookComponent] } // Echter Unit Test
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should call the BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
