import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  endpoint = 'http://localhost:8080/authors';
  constructor(private httpClient: HttpClient) {}
  getAuthor() {
    return this.httpClient.get(this.endpoint);
  }

  deleteAuthor(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }
  addAuthor(
    autor: any,

  ): Observable<string> {
    return this.httpClient.post<string>(
      this.endpoint,autor,
      httpOptions
    );
  }
  editAuthor(
    id: number,
    name: string,
    birthDate: string,
    nationality: string,
  
  ): Observable<string> {
    return this.httpClient.put<string>(
      this.endpoint + `/${id}`,
      { birthDate, nationality, name },
      httpOptions
    );
  }
}
