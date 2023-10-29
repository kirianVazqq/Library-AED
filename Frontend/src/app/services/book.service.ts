import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class BookService {
  endpoint = 'http://localhost:8080/books';

  constructor(private httpClient: HttpClient) {}

  getBook() {
    return this.httpClient.get(this.endpoint);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }

  addBook(
    authorId: string,
    title: string,
    genre: string,
    publicationYear: string
  ): Observable<string> {
    return this.httpClient.post<string>(
      this.endpoint,
      { authorId, title, genre, publicationYear },
      httpOptions
    );
  }

  addBookWithAuthor(
    authorId: number,
    title: string,
    genre: string,
    publicationYear: string
  ): Observable<string> {
    return this.httpClient.post<string>(
      this.endpoint + `/withAuthor/${authorId}`,
      { title, genre, publicationYear },
      httpOptions
    );
  }

  editBook(
    id: number,
    authorId: number,
    title: string,
    genre: string,
    publicationYear: string
  ): Observable<string> {
    return this.httpClient.put<string>(
      this.endpoint + `/${id}`,
      { authorId, title, genre, publicationYear },
      httpOptions
    );
  }
  editBookWithAuthor(
    authorId: number,
    id: number,
    title: string,
    genre: string,
    publicationYear: string
  ): Observable<string> {
    return this.httpClient.put<string>(
      this.endpoint + `/withAuthor/${id}/${authorId}`,
      { title, genre, publicationYear },
      httpOptions
    );
  }
  
}
