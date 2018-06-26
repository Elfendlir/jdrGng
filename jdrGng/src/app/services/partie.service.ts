import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  baseUrl: string = 'http://localhost:8082/JDR/parties';
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
  add(partie: any): Observable<any> {
    return this.http.post(this.baseUrl, partie);
  }

  update(partie: any): Observable<any> {
    return this.http.put(this.baseUrl, partie);
  }
}
