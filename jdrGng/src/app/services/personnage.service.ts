import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personnage} from '../classes/personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  baseUrl: string = 'http://localhost:8082/JDR/personnages';
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
  add(personnage: Personnage): Observable<any> {
    return this.http.post(this.baseUrl, personnage);
  }

  update(personnage: Personnage): Observable<any> {
    return this.http.put(this.baseUrl, personnage);
  }
}
