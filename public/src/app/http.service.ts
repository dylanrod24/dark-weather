import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
// Single weather data
  getWeather(city){
    console.log("Getting weather from api");
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5340175&APPID=5013234a762714e850cc67902ffc8536&units=imperial')
  }
// Forcast data
  getForecast(forecast){
    console.log("got forcast");
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5340175&APPID=5013234a762714e850cc67902ffc8536&units=imperial')
    
}

}
