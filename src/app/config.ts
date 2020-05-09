import { environment } from './../environments/environment';
import { HttpHeaders } from '@angular/common/http';

export class Config{
    public static apiUrl = environment.apiUrl;
    public static appName = environment.appName;

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    public static httpOptionsWithAuthorization = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    };
}