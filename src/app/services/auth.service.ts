import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL: string = 'https://localhost:8000/api';

  authSubject = new Subject<boolean>();
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private httpClient: HttpClient) { }

  signin({ username, password }) {
    return this.httpClient.post<any>(`${this.URL}/signin`, JSON.stringify({username, password}), this.httpOptions);
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
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODcwMjk3NjgsImV4cCI6MTU4NzExNjE2OCwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJ1c2VybmFtZSI6Imt1dGl3YSJ9.RA77BA7yn92KXW3WHZT6N1-yKx752Js3DOU8XO7QepF28FCq8eQupCR0C0c8B4EmRWFkWLSRf6Y4hQm0X4OTbJGvGbjkz1OZ4tcDJV9AI5CXnuqYjr1yhywqrV9KSTbNFhDIymfARQFfDod_kaSHEGj9EJFC5SfqR8XaqxamFm74vUg8YAn1MMh-6hR2n7jT9OkO-uoKfDKxDgj-O4L_03EKX3YOYqi4HawjMH7BMFsB_oxpvElOMRAo5Ad5bkME5Qv7i-K-MyLoAV0XWX2TLsgwoagXUtdMNlHvVj3gbUGFvq8-5TjA3w8ML_GX6AnQT05LOQX8v0o4FJsGmwMmIYj0s2RN1kamNHNfKL0BUsh-4MEkWiG-FLho6WcF1O6xh5CPglqayW1ENPI7hcx-b2j26b6SKxom_LD_M0RB0Pp2jt9fcSG-1oM9DdZlifMmRFPrlUwzZdphn1BJSjv8HDPV_G3D6_lIQFxLrOHF0INOGftWZd7MKojj8Y6Q0wXt8pSnRv1tgQl-hDP2nW31kq9DMFmpaRBiXrCAkLmWIarvU_Jrkw8QV9sjlRy_Wsq247pLRda8OBGeNwlVASjzNtn3-VQ2dV9AG1B4M4JbU5hX3_I2SLz7y7YxoOG49zhLJn8YEuHV50sKO0B7EP4fhkZfD--loiGRqmP4QHRN18Y"; //localStorage.getItem('token');
  }

  signout() {
    localStorage.removeItem('token');
    this.emitAuthStateChanged();
  }
}
