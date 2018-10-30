import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getWeather(city){
    console.log("Getting weather from api");
    return this. _http.get('')
  }
}
