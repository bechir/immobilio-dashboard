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
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODcxNDMxNzIsImV4cCI6MTU4NzIyOTU3Miwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJ1c2VybmFtZSI6Imt1dGl3YSJ9.rBAh5u9Xdtd_RxCIMDVS1xdwyNy22Xx9I2DBfzwqG5IZQkxscRVMIGHwsfFzibhXtxwuzf2Zx-JTz31l_nq4jYPpLUexH-XEXriOIHJcnddawmhUHq5NEy2nd5es3F14pnqH_Nu4xq3ILDc4IEGWPhChyAEy-aoCf_07Iuuexffx9NzUvMWeH9JVNmX0aqBKldqyD9kf3H2rdkdV-fiSrOuA5vGIbo9puNcNH-zodBTFD-FFR3gyDJpQeaHigb9vzWRksR7vgOYzu3aIDdOTyrcZwCMaUo1KV80on156uPnQwPhMkQJI9i3Ltnn86wWOOAxCc8n_K9cDMuP8l8RS5i17jx_kUnuo2KWuBDP6_tLqIr6mXJXF61WzsJx0NwFIH68tkLz4rIWgsvhKCYfsVqU3UoMMg1Li2WVzzrRdNBAnvQaZE2JFNMcf-5Xm4fNAqyXJT3rZzuDoN7PTeoOtP1DSbbu7XlyPkA9D-L3GyMzvqXrgW-o2Y-qT0f6rLdZD25hkT5QgPlXurO018dSyRl4Qk9hvnGMQQXyjnLU2tIfgPDF-yp-dq_SRBKAuzzhtr3Q_aZnL49q3xXSGTb4b723eV5tkHPdF_FVCDImHGa-qmiBrgdkYpGAu4KV1nSGZdF9iO2y57zfUuPs6kFqCQfL_wXazhmW633Pm4415Qr4"; //localStorage.getItem('token');
  }

  signout() {
    localStorage.removeItem('token');
    this.emitAuthStateChanged();
  }
}
