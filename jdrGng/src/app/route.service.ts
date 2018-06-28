import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Route} from './route';

@Injectable()
export class RouteService {

  baseUrl = 'http://localhost:8082/JDR/route/';
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
  add(route: Route): Observable<any> {
    return this.http.post(this.baseUrl, route);
  }
  update(route: Route): Observable<any> {
    return this.http.put(this.baseUrl, route);
  }
}
