import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchgifService {

  constructor(private http: HttpClient) { }

  public getGif(search): Observable<any>{
    return this.http.get('https://api.giphy.com/v1/stickers/search?api_key=ryg9PPdFjvVV4elgTTxyNYU07WTwTDic&limit=15&offset=0&rating=g&lang=en&q='+search);
  }
}