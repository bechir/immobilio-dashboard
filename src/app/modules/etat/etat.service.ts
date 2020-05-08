import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  private arrieres?: any[];
  public arrieresSubject = new Subject<any[]>()

  private depenses?: any[];
  public depensesSubject = new Subject<any[]>();

  private encaissements?: any[];
  public encaissementsSubject = new Subject<any[]>();

  emitArrieresSubject() {
    this.arrieresSubject.next(this.arrieres?.slice());
  }

  emitDepensesSubject() {
    this.depensesSubject.next(this.depenses?.slice());
  }

  emitEncaissementsSubject() {
    this.encaissementsSubject.next(this.encaissements?.slice());
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
    this.httpClient.get<any[]>(`${this.URL}/etat/arrieres`, {
      params,
      ...this.httpOptions
    }).subscribe(data => {
        this.arrieres = data;
        console.log(data);
        this.emitArrieresSubject();
      },
      error => console.error(error)
    );
  }

  getDepenses(params?: any) {
    this.httpClient.get<any[]>(`${this.URL}/etat/decaissements`, {
      params,
      ...this.httpOptions
    }).subscribe(data => {
      this.depenses = data;
      console.log(data);
      this.emitDepensesSubject();
    },
      error => console.error(error)
    );
  }

  getEncaissements(params?: any) {
    this.httpClient.get<any[]>(`${this.URL}/etat/encaissements`, {
      params,
      ...this.httpOptions
    }).subscribe(data => {
      this.encaissements = data;
      console.log(data);
      this.emitEncaissementsSubject();
    },
      error => console.error(error)
    );
  }
}
