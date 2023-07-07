import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Veraltetes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Blubb!',
    rating: 1
  }];

  doRateUp(book: Book): void {
    console.table(book);
  }

  doRateDown(book: Book): void {
    console.table(book);
  }
}
