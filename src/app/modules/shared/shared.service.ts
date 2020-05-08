import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  URL = 'http://immobilio.local/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AuthService.prototype.getAuthToken()}`
    })
  }; 

  constructor(private httpClient: HttpClient) { }

  getAgences() {
    return this.httpClient.get<Agence[]>(`${this.URL}/agences/list`, this.httpOptions);
  }

  getAgence(id) {
    return this.httpClient.get<Agence>(`${this.URL}/agences/${id}`, this.httpOptions);
  }

  getScis() {
    return this.httpClient.get<any[]>(`${this.URL}/scis/list`, this.httpOptions);
  }

  getSci(id) {
    return this.httpClient.get<any>(`${this.URL}/scis/${id}`, this.httpOptions);
  }

  getClients() {
    return this.httpClient.get<Client[]>(`${this.URL}/clients/list`, this.httpOptions);
  }

  getClient(id) {
    return this.httpClient.get<Client>(`${this.URL}/clients/${id}`, this.httpOptions);
  }
}
