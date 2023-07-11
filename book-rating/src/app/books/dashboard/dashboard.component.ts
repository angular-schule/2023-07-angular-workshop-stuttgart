import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, NgFor, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  bookRating = inject(BookRatingService);
  bookStore = inject(BookStoreService);

  books: Book[] = [];

  constructor() {
    this.bookStore.getAllBooks().subscribe(books => this.books = books)
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRating.rateUp(book);
    // const ratedBook = { ...book, rating: book.rating + 1 }
    this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRating.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating); // 🎉
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
