import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  books: any = [];

  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBook().subscribe((response) => {
      this.books = response;
    });
  }
}
