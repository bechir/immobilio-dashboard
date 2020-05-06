import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArriereService {
    private arrierees?: any[];
    public subject = new Subject<any[]>()

    emitSubject() {
      this.subject.next(this.arrierees?.slice());
    }

    URL = 'http://immobilio.local/api';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AuthService.prototype.getAuthToken()}`
      })
    };
  
    constructor(private httpClient: HttpClient) { }
  
    getArrierees(params?: any) {
      this.httpClient.get<any[]>(`${this.URL}/etat/arrierees`, {
        params,
        ...this.httpOptions
      }).subscribe(data => {
          this.arrierees = data;
          console.log(data);
          this.emitSubject();
        },
        error => console.error(error)
      );
    }
}
