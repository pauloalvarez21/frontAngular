import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url:string = "http://localhost:8080/api/card/";

  constructor(private http:HttpClient ) { }
  
  /**
   * 
   * @returns 
   */
  getAll():Observable<Card[]> {
    return this.http.get<Card[]>(this.url);
  }

  create(card:Card):Observable<Card> {
    return this.http.post<Card>(this.url, card);
  }

  get(id:number):Observable<Card> {
    return this.http.get<Card>(this.url+'/'+id);
  }

  update(card:Card):Observable<Card> {
    return this.http.put<Card>(this.url, card);
  }

  delete(id:number):Observable<Card> {
    return this.http.delete<Card>(this.url+'/'+id);
  }
}
