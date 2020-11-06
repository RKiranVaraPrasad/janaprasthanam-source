import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = "http://nodeappshop.club/api/"

  private posts  = `${this.baseUrl}posts`;
  private latestLeft  = `${this.baseUrl}latestLeft`;
  private latestRight  = `${this.baseUrl}latestRight`;
  private categories  = `${this.baseUrl}categories`;
  private listByCategory  = `${this.baseUrl}postsByCatID`;
  private breakings  = `${this.baseUrl}breaking`;
  private national  = `${this.baseUrl}national`;
  private sports  = `${this.baseUrl}sports`;
  private andhra  = `${this.baseUrl}ap`;
  private telangana  = `${this.baseUrl}telangana`;
  private bannerSlider  = `${this.baseUrl}bannerSlider`;
  private youtubeLinks  = `${this.baseUrl}youtube`;
  private ePapers  = `${this.baseUrl}e-paper`;



  constructor(
    private http: HttpClient
  ) { }

  getLatestNewsLeft(): Observable<any>{
    return this.http.get<any>(this.latestLeft);
  }
  getLatestNewsRight(): Observable<any>{
    return this.http.get<any>(this.latestRight);
  }
  getNationalNews(): Observable<any>{
    return this.http.get<any>(this.national);
  }

  getAndhraNews(): Observable<any>{
    return this.http.get<any>(this.andhra);
  }
  getTelanganaNews(): Observable<any>{
    return this.http.get<any>(this.telangana);
  }
  getSportList(): Observable<any>{
    return this.http.get<any>(this.sports);
  }

  getBannerList(): Observable<any>{
    return this.http.get<any>(this.bannerSlider);
  }

  getBannerDetail(id: number): Observable<any>{
    return this.http.get<any>(`${this.bannerSlider}/${id}`);
  }

  getcategories(): Observable<any>{
    return this.http.get(this.categories)
}
  getList(id: number): Observable<any>{
      return this.http.get(`${this.listByCategory}/${id}`);
  }

  getBreaking(): Observable<any>{
    return this.http.get(this.breakings);
  } 

  getBreakingDetail(id: number): Observable<any>{
    return this.http.get(`${this.breakings}/${id}`);
  } 

  getPostDetail(id: number): Observable<any>{
    // let params = new HttpParams().set('id', `${id}`);
      return this.http.get(`${this.posts}/${id}`);
  }

  getYoutube(): Observable<any>{
    return this.http.get(this.youtubeLinks);
  } 
  getEPaperList(): Observable<any>{
    return this.http.get(this.ePapers);
  } 

}
