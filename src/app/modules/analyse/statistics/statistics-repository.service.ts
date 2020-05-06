import { Config } from './../../../config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Agence } from 'src/app/models/agence';

@Injectable({
  providedIn: 'root'
})
export class StatisticsRepository {

  // URL = 'http://immobilio.local/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthService.prototype.getAuthToken()}`
    })
  };

  // encaissement arriere depenses 

  constructor(private httpClient: HttpClient) { }

  getTauxOccupationByAgenceByNatureEspace(agenceCode: string) {
    return this.httpClient.get<any>(`${Config.apiUrl}/bien-immobilier/etat/taux-occupation/par-nature/agence/${agenceCode}`, this.httpOptions);
  }

  getInvoiceByPaymentMethod() {
    return this.httpClient.get<any>(`${Config.apiUrl}/paiement-factures/etat/mode-paiement`, this.httpOptions);
  }

  getInvoiceByAgence(id: number) {
    return this.httpClient.get<Map<string, number>[]>(`${Config.apiUrl}/paiement-factures/etat/agence/${id}`, this.httpOptions);
  }

  getExpensesByNatureExpense(agenceId?: number) {
    let path = 'operation-caisse/depense/etat/nature-depense';
    if(agenceId !== undefined) {
      path += `-par-agence/${agenceId}`;
    }

    return this.httpClient.get<any>(`${Config.apiUrl}/${path}`, this.httpOptions);
  }

  getAgences() {
    return this.httpClient.get<Agence[]>(`${Config.apiUrl}/agences/list`, this.httpOptions);
  }

  getAgence(id) {
    return this.httpClient.get<Agence>(`${Config.apiUrl}/agences/${id}`, this.httpOptions);
  }

  getOperationsByTypeOperation() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/par-type-operation`, this.httpOptions);
  }

  getCollectionPaymentByAgence() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/encaissement/etat/par-agence`, this.httpOptions);
  }

  getCollectionByCustomerType() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/encaissement/etat/par-type-client`, this.httpOptions);
  }
}
