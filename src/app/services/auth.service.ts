import { Config } from './../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL: string = 'http://immobilio.local/api';

  authSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  signin({ username, password }) {
    return this.httpClient.post<any>(`${Config.apiUrl}/auth`, JSON.stringify({username, password}), Config.httpOptions);
  }

  signup({ username, password }) {
    return this.httpClient.post<any>(`${Config.apiUrl}/register`, JSON.stringify({username, password}), Config.httpOptions);
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
