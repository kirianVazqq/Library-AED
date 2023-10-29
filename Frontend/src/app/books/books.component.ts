import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})

export class BooksComponent implements OnInit {
  books: any = [];

  editingId: number | null = null;
  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  formBook!: FormGroup;

  ngOnInit() {
    this.getAllBooks();
    this.formBook = new FormGroup({
      authorId: new FormControl(''),
      title: new FormControl(''),
      genre: new FormControl(''),
      publicationYear: new FormControl(''),
    });
  }


  getAllBooks() {
    this.bookService.getBook().subscribe((response) => {
      this.books = response;
    });
  }

  addBook() {
    const authorId = this.formBook.get('authorId')?.value;
    const title = this.formBook.get('title')?.value;
    const genre = this.formBook.get('genre')?.value;
    const publicationYear = this.formBook.get('publicationYear')?.value;

    this.bookService
      .addBookWithAuthor(authorId, title, genre, publicationYear)
      .subscribe((response) => {
        this.getAllBooks();
        this.formBook.reset();
      });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe((response) => {
      this.getAllBooks();
    });
  }
  addInfoInForm(book: any, id: number) {
    this.editingId = id;
    
    this.formBook.setValue({
      authorId: book.author.id,
      title: book.title,
      genre: book.genre,
      publicationYear: book.publicationYear,
    });
  }
  editBook() {
    const id = this.editingId;
    const authorId = this.formBook.get('authorId')?.value;
    const title = this.formBook.get('title')?.value;
    const genre = this.formBook.get('genre')?.value;
    const publicationYear = this.formBook.get('publicationYear')?.value;
    if (id == null) {
      return console.log('El id no puede ser null');
    }
    return this.bookService
      .editBook(id, authorId, title, genre, publicationYear)
      .subscribe((response) => {
        this.getAllBooks();
        this.formBook.reset();
      });
  }
}
