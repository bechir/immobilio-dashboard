import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL: string = 'http://immobilio.local/api';

  authSubject = new Subject<boolean>();
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  signin({ username, password }) {
    return this.httpClient.post<any>(`${this.URL}/auth`, JSON.stringify({username, password}), this.httpOptions);
  }

  signup({ username, password }) {
    return this.httpClient.post<any>(`${this.URL}/register`, JSON.stringify({username, password}), this.httpOptions);
  }

  emitAuthStateChanged() {
    this.authSubject.next(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    return this.getAuthToken() !== null;
  }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }

  signout() {
    localStorage.removeItem('token');
    this.emitAuthStateChanged();
  }
}
