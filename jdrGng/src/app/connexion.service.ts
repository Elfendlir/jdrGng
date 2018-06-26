import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Incident} from './incident';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  baseUrl = 'http://localhost:8082/incident/incidents';
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + ' ' + id);
  }
  delete(id: number): Observable<any> {
    return this.http.get(this.baseUrl + ' ' + id);
  }

  add(incident: Incident): Observable<any> {
    return this.http.post(this.baseUrl, incident);
  }

  update(incident: Incident): Observable<any> {
    return this.http.put(this.baseUrl, incident);
  }

}
