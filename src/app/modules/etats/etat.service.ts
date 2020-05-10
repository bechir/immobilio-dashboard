import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config';

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

  private situationsCaisses?: any[];
  public situationsCaissesSubject = new Subject<any[]>();

  emitArrieresSubject() {
    this.arrieresSubject.next(this.arrieres?.slice());
  }

  emitDepensesSubject() {
    this.depensesSubject.next(this.depenses?.slice());
  }

  emitEncaissementsSubject() {
    this.encaissementsSubject.next(this.encaissements?.slice());
  }

  emitSituationsCaissesSubject() {
    this.situationsCaissesSubject.next(this.situationsCaisses?.slice());
  }

  constructor(private httpClient: HttpClient) { }

  getArrierees(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/etat/arrieres`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
        this.arrieres = data;
        this.emitArrieresSubject();
      },
      error => console.error(error)
    );
  }

  getDepenses(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/etat/decaissements`, {
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
    this.httpClient.get<any[]>(`${Config.apiUrl}/etat/encaissements`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.encaissements = data;
      this.emitEncaissementsSubject();
    },
      error => console.error(error)
    );
  }

  getSituationsCaisses(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/etat/situations-caisses`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.situationsCaisses = data;
      this.emitSituationsCaissesSubject();
    },
      error => console.error(error)
    );
  }
}
