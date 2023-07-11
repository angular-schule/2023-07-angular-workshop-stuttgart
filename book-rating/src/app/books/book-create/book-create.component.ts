import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl) {
    return control.invalid && control.touched;
  }

  hasError(control: FormControl, errorCode: 'minlength' | 'required') {
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    // TODO:
    // 1. Erzeuge ein Event mit dem Namen create
    // 2. Versende das neue Buch per Event
    // 3. Subscribe dich im Dashboard auf das Event
    // 4. Füge das neue Buch dem Buch-Array hinzu (immutable!)

    this.bookForm.reset();
  }
}
