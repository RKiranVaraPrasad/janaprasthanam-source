import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private postLatestNews = "https://node-news-app.herokuapp.com/api/latest-news";

  constructor(
    private http: HttpClient
  ) { }

  postLatestNewsData(latest): Observable<any>{
    return this.http.post(this.postLatestNews, latest);
  }
}
