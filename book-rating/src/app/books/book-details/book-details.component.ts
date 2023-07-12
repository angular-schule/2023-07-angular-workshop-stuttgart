import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bookStore = inject(BookStoreService);
  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(param => param.get('isbn') || ''),
    map(isbn => this.bookStore.getSingleBook(isbn))
  ).subscribe(x => x.subscribe(y => console.log(y)))

}
