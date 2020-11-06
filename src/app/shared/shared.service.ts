import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http: HttpClient) { }

  private categoriesUrl = "http://nodeappshop.club/api/categories";

  getCategories(): Observable<any>{
    return this.http.get<any>(this.categoriesUrl);
  }

}
