import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Agence } from 'src/app/models/agence';

@Injectable({
  providedIn: 'root'
})
export class StatisticsRepository {

  URL = 'https://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthService.prototype.getAuthToken()}`
    })
  };

  constructor(private httpClient: HttpClient) { }

  getInvoiceByPaymentMethod() {
    return this.httpClient.get<any>(`${this.URL}/paiement-factures/etat/mode-paiement`, this.httpOptions);
  }

  getInvoiceByAgence(id: number) {
    return this.httpClient.get<Map<string, number>[]>(`${this.URL}/paiement-factures/etat/agence/${id}`, this.httpOptions);
  }

  getExpensesByNatureExpense(agenceId?: number) {
    let path = 'operation-caisse/depense/etat/nature-depense';
    if(agenceId !== undefined) {
      path += `-par-agence/${agenceId}`;
    }
    return this.httpClient.get<any>(`${this.URL}/${path}`, this.httpOptions);
  }

  getAgences() {
    return this.httpClient.get<Agence[]>(`${this.URL}/agences/list`, this.httpOptions);
  }

  getAgence(id) {
    return this.httpClient.get<Agence>(`${this.URL}/agences/${id}`, this.httpOptions);
  }
}
