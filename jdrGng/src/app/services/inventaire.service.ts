import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  baseUrl: string = 'http://localhost:8082/JDR/inventaires';
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
  add(inventaire: any): Observable<any> {
    return this.http.post(this.baseUrl, inventaire);
  }

  update(inventaire: any): Observable<any> {
    return this.http.put(this.baseUrl, inventaire);
  }
}
