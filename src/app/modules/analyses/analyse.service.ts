import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  // Clients et Contrats
  private clients?: any[];
  public clientsSubject = new Subject<any[]>();

  private contrats?: any[];
  public contratsSubject = new Subject<any[]>();

  // Dépenses
  private expenses?: any[];
  public expensesSubject = new Subject<any[]>();

  private encaissements?: any[];
  public encaissementsSubject = new Subject<any[]>();

  // Factures
  private factures?: any[];
  public facturesSubject = new Subject<any[]>();

  // Patrimoine
  private biensImmobiliers?: any[];
  public biensImmobiliersSubject = new Subject<any[]>();

  private espacesLocatifs?: any[];
  public espacesLocatifsSubject = new Subject<any[]>();

  private proprietaires?: any[];
  public proprietairesSubject = new Subject<any[]>();

  emitClientsSubject() {
    this.clientsSubject.next(this.clients?.slice());
  }

  emitContratsSubject() {
    this.contratsSubject.next(this.contrats?.slice());
  }

  emitExpensesSubject() {
    this.expensesSubject.next(this.expenses?.slice());
  }

  emitEncaissementsSubject() {
    this.encaissementsSubject.next(this.encaissements?.slice());
  }

  emitFacturesSubject() {
    this.facturesSubject.next(this.factures?.slice());
  }

  emitBiensImmobiliersSubject() {
    this.biensImmobiliersSubject.next(this.biensImmobiliers?.slice());
  }

  emitEspacesLocatifsSubject() {
    this.espacesLocatifsSubject.next(this.espacesLocatifs?.slice());
  }

  emitProprietairesSubject() {
    this.proprietairesSubject.next(this.proprietaires?.slice());
  }

  constructor(private httpClient: HttpClient) { }

  getClients(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/clients/analyse`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.clients = data;
      this.emitClientsSubject();
    },
      error => console.error(error)
    );
  }

  getContrats(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/clients/contrats`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.contrats = data;
      this.emitContratsSubject();
    },
      error => console.error(error)
    );
  }

  getExpenses(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/operation-caisse/depenses`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.expenses = data;
      this.emitExpensesSubject();
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

  getBiensImmobiliers(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/patrimoine/biens-immobiliers`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.biensImmobiliers = data;
      this.emitBiensImmobiliersSubject();
    },
      error => console.error(error)
    );
  }

  getEspacesLocatifs(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/patrimoine/espaces-locatifs`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.espacesLocatifs = data;
      this.emitEspacesLocatifsSubject();
    },
      error => console.error(error)
    );
  }

  getProprietaires(params?: any) {
    this.httpClient.get<any[]>(`${Config.apiUrl}/patrimoine/proprietaires`, {
      params,
      ...Config.httpOptionsWithAuthorization
    }).subscribe(data => {
      this.proprietaires = data;
      this.emitProprietairesSubject();
    },
      error => console.error(error)
    );
  }
}
