import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  private depenses?: any[];
  public depensesSubject = new Subject<any[]>();

  private encaissements?: any[];
  public encaissementsSubject = new Subject<any[]>();

  private factures?: any[];
  public facturesSubject = new Subject<any[]>();

  emitDepensesSubject() {
    this.depensesSubject.next(this.depenses?.slice());
  }

  emitEncaissementsSubject() {
    this.encaissementsSubject.next(this.encaissements?.slice());
  }

  emitFacturesSubject() {
    this.facturesSubject.next(this.factures?.slice());
  }

  constructor(private httpClient: HttpClient) { }

  getDepenses(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/analyse/depenses`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.depenses = data;
      this.emitDepensesSubject();
    },
      error => console.error(error)
    );
  }

  getEncaissements(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/analyse/encaissements`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.encaissements = data;
      this.emitEncaissementsSubject();
    },
      error => console.error(error)
    );
  }

  getFactures(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/analyse/factures`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.factures = data;
      this.emitFacturesSubject();
    },
      error => console.error(error)
    );
  }
}
