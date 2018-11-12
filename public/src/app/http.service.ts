import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

    getWeather(place) {
      console.log("weather button response from service!");
      return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address=&key=AIzaSyCCU62uzeDPHCiJtSIFtUVa5iq81EoSR_M');
    }
  
}
