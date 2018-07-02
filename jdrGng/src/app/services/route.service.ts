import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Route} from '../classes/route';

@Injectable()
export class RouteService {

  baseUrl: string = 'http://localhost:8082/JDR/routes/';

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '' + id);
  }
  getRouteInitiale(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'initiale/' + id);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '' + id);
  }
  add(route: Route): Observable<any> {
    return this.http.post(this.baseUrl, route);
  }

  update(route: Route): Observable<any> {
    return this.http.put(this.baseUrl, route);
  }
}
