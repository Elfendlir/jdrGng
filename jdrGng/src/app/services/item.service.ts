import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Item} from "../classes/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = 'http://localhost:8082/JDR/items/';

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
  add(item: Item): Observable<any> {
    return this.http.post(this.baseUrl, item);
  }

  update(item: Item): Observable<any> {
    return this.http.put(this.baseUrl, item);
  }
}
