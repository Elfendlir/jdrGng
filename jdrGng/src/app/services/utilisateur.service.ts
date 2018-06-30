import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Utilisateur} from "../classes/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  baseUrl: string = 'http://localhost:8082/JDR/utilisateur/';

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '' + id);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '' + id);
  }
  add(utilisateur: Utilisateur): Observable<any> {
    return this.http.post(this.baseUrl, utilisateur);
  }

  update(utilisateur: Utilisateur): Observable<any> {
    return this.http.put(this.baseUrl, utilisateur);
  }
}
