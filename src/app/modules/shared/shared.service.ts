import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getAgences() {
    return this.httpClient.get<Agence[]>(`${Config.apiUrl}/agences/list`, Config.httpOptionsWithAuthorization);
  }

  getAgence(id) {
    return this.httpClient.get<Agence>(`${Config.apiUrl}/agences/${id}`, Config.httpOptionsWithAuthorization);
  }

  getScis() {
    return this.httpClient.get<any[]>(`${Config.apiUrl}/scis/list`, Config.httpOptionsWithAuthorization);
  }

  getSci(id) {
    return this.httpClient.get<any>(`${Config.apiUrl}/scis/${id}`, Config.httpOptionsWithAuthorization);
  }

  getClients() {
    return this.httpClient.get<Client[]>(`${Config.apiUrl}/clients/list`, Config.httpOptionsWithAuthorization);
  }

  getClient(id) {
    return this.httpClient.get<Client>(`${Config.apiUrl}/clients/${id}`, Config.httpOptionsWithAuthorization);
  }

  getFacturesStatus() {
    return this.httpClient.get<any[]>(`${Config.apiUrl}/factures/status/enabled`, Config.httpOptionsWithAuthorization);
  }
}
