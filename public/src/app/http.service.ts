import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private jsonp: HttpClientJsonpModule) { }

  getWeather(city){
    console.log("Getting weather from api");
    // return this. jsonp.request('https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/34.1808,118.3090')
  }
}
