import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Scenario} from "../classes/scenario";

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  baseUrl: string = 'http://localhost:8082/JDR/scenarios';
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '' + id);
  }
  add(scenario: Scenario): Observable<any> {
    return this.http.post(this.baseUrl, scenario);
  }

  update(scenario: Scenario): Observable<any> {
    return this.http.put(this.baseUrl, scenario);
  }
}
