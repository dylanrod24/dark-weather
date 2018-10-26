import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}

  weather = {summary: "", temperature: "", pressure: ""};

  ngOnInit(){
    // this.getWeather();
  }
  // getWeather(){
  //   console.log("Weather loaded");
  //   let city = this._httpService.getWeather('City');
  //   city.subscribe((data: any) => {
  //     this.weather.summary = data.currently.summary;
  //     this.weather.temperature = data.currently.temperature;
  //     this.weather.pressure = data.currently.pressure;
  //   })
  // }
}
