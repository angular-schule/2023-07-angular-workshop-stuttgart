import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from './book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  httpClient = inject(HttpClient);

  getAllBooks() {
    return this.httpClient.get<Book[]>(environment.apiUrl + 'books');
  }

  getSingleBook(isbn: string) {
    return this.httpClient.get<Book>(environment.apiUrl + 'books/' + isbn + '/slow');
  }
}
