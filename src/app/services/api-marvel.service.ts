import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  constructor(private http:HttpClient) { }

  allComics():Observable<any>
  {
    const comicUrl ='http://gateway.marvel.com/v1/public/comics?limit=10&ts=1&apikey=0e3f9405763aaa9bb2211f7887df40e8&hash=dfe0d84751cdf512c2ea6349a8b4b664';
    return this.http.get(comicUrl);
  }


  allSeries():Observable<any>
  {
    const seriesUrl ='http://gateway.marvel.com/v1/public/series?limit=10&ts=1&apikey=0e3f9405763aaa9bb2211f7887df40e8&hash=dfe0d84751cdf512c2ea6349a8b4b664';
    return this.http.get(seriesUrl);
  }

  comicSeleccionado(id : number):Observable<any>
  {
    const comicUrl =`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=0e3f9405763aaa9bb2211f7887df40e8&hash=dfe0d84751cdf512c2ea6349a8b4b664`;

    return this.http.get(comicUrl);
  }

}
