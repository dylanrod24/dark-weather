import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}

  weather = {temperature: "", pressure: "", windSpeed: ""};
  forecast = {name: "", tempMax: ""};

  ngOnInit(){
    this.getWeather();
    this.getForecast();
  }
  // Gets single data
  getWeather(){
    console.log("Weather loaded into variable");
    let city = this._httpService.getWeather('City');
    city.subscribe((data: any) => {
      this.weather.temperature = data.main.temp;
      this.weather.pressure = data.main.pressure;
      this.weather.windSpeed = data.wind.speed;
    })
  }
  // Gets forecast
  getForecast(){
    console.log("Weahter forecast loaded into variable")
    let cityForecast = this._httpService.getForecast('Forecast');
    cityForecast.subscribe((data: any) => {
      this.forecast.name = data.city.name;
      this.forecast.tempMax = data.list.main;
    })
  }
}
