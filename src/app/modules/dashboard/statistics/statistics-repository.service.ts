import { Config } from '../../../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agence } from 'src/app/models/agence';

@Injectable({
  providedIn: 'root'
})
export class StatisticsRepository {

  constructor(private httpClient: HttpClient) { }

  getTauxOccupationByAgenceByNatureEspace(agenceCode: string) {
    return this.httpClient.get<any>(`${Config.apiUrl}/bien-immobilier/etat/taux-occupation/par-nature/agence/${agenceCode}`, Config.httpOptionsWithAuthorization);
  }

  getInvoiceByPaymentMethod() {
    return this.httpClient.get<any>(`${Config.apiUrl}/paiement-factures/etat/mode-paiement`, Config.httpOptionsWithAuthorization);
  }

  getInvoiceByAgence(id: number) {
    return this.httpClient.get<Map<string, number>[]>(`${Config.apiUrl}/paiement-factures/etat/agence/${id}`, Config.httpOptionsWithAuthorization);
  }

  getExpensesByNatureExpense(agenceId?: number) {
    let path = 'operation-caisse/depense/etat/nature-depense';
    if(agenceId !== undefined) {
      path += `-par-agence/${agenceId}`;
    }

    return this.httpClient.get<any>(`${Config.apiUrl}/${path}`, Config.httpOptionsWithAuthorization);
  }

  getAgences() {
    return this.httpClient.get<Agence[]>(`${Config.apiUrl}/agences/list`, Config.httpOptionsWithAuthorization);
  }

  getAgence(id) {
    return this.httpClient.get<Agence>(`${Config.apiUrl}/agences/${id}`, Config.httpOptionsWithAuthorization);
  }

  getOperationsByTypeOperation() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/par-type-operation`, Config.httpOptionsWithAuthorization);
  }

  getCollectionPaymentByAgence() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/encaissement/etat/par-agence`, Config.httpOptionsWithAuthorization);
  }

  getCollectionByCustomerType() {
    return this.httpClient.get<any>(`${Config.apiUrl}/operation-caisse/encaissement/etat/par-type-client`, Config.httpOptionsWithAuthorization);
  }
}
