import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Scenario} from './scenario';

@Injectable()

export class ScenarioService {

  baseUrl = 'http://localhost:8082/JDR/scenarios/';
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
  add(scenario: Scenario): Observable<any> {
    return this.http.post(this.baseUrl, scenario);
  }
  update(scenario: Scenario): Observable<any> {
    return this.http.put(this.baseUrl, scenario);
  }
}
