import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})

export class MemberService {
  endpoint = 'http://localhost:8080/members';
  constructor(private httpClient: HttpClient) {}
  getMember() {
    return this.httpClient.get(this.endpoint);
  }

  deleteMember(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }
  
  addMember(email: string, name: string, registrationDate: string): Observable<string> {
    return this.httpClient.post<string>(
      this.endpoint,
      { email, name,registrationDate },
      httpOptions
    );
  }

  ediMember(
    id: number,
    name: string,
    email: string,
    registrationDate: string,
    
  ): Observable<string> {
    return this.httpClient.put<string>(
      this.endpoint + `/${id}`,
      { name, email, registrationDate },
      httpOptions
    );
  }
}

