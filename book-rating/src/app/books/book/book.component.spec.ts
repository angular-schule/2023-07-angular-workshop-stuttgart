import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookComponent]
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* 😭😢😭
  it('should work as expected', () => {
    expect(true).toBeTruthy();

    // test that everything works, no expcetion thrown
    component.doRateDown()
    component.doRateUp()
  });
  */
});
