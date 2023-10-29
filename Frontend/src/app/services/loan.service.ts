import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class LoanService {
  endpoint = 'http://localhost:8080/loans';
  constructor(private httpClient: HttpClient) {}

  getLoan() {
    return this.httpClient.get(this.endpoint);
  }

  deleteLoan(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }
  addLoan(
    returnDate: string,
    status: string,
    bookId: string,
    loanDate: string,
    memberId: string
  ): Observable<string> {
    return this.httpClient.post<string>(
      this.endpoint,
      { returnDate, status, bookId, loanDate, memberId },
      httpOptions
    );
  }
  editLoan(
    id: number,
    returnDate: number,
    status: string,
    bookId: string,
    loanDate: string,
    memberId: string
  ): Observable<string> {
    return this.httpClient.put<string>(
      this.endpoint + `/${id}`,
      { returnDate, status, bookId, loanDate,memberId },
      httpOptions
    );
  }
}
