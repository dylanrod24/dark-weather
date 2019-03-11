import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  callWeather() {
    console.log("reached service");
    return this._http.get('https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/37.3881,-121.8756');
  }
}


