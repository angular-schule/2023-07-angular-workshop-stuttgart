import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookCreateComponent } from '../book-create/book-create.component';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookActions } from '../store/book.actions';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, NgFor, BookCreateComponent, AsyncPipe, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  // bookRating = inject(BookRatingService);
  // bookStore = inject(BookStoreService);

  books$ = inject(Store).select(selectBooks);
  loading$ = inject(Store).select(selectBooksLoading);

  constructor(store: Store) {
    // this.bookStore.getAllBooks().subscribe(books => this.books = books)
    store.dispatch(BookActions.loadBooks())
  }

  doRateUp(book: Book) {
    // const ratedBook = this.bookRating.rateUp(book);
    // // const ratedBook = { ...book, rating: book.rating + 1 }
    // this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.bookRating.rateDown(book);
    // this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating); // 🎉
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
