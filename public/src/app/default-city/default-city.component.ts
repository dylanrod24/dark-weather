import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-default-city',
  templateUrl: './default-city.component.html',
  styleUrls: ['./default-city.component.css']
})
export class DefaultCityComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  place_id = {place: ""};
  coord = {lat: "", lng: ""};
  weather = {timezone: "", temperature: "", humidity: "", windSpeed: ""};
  forecast = {tempMax: ""};

  ngOnInit() {
    // Sockets connection to node server
    const socket = io('http://localhost:4000');
    console.log("sockets client connected to server");
    socket.on('temp', (temp) => this.weather.temperature = (temp));
    socket.on('windspeed', (windSpeed) => this.weather.windSpeed = (windSpeed));
    socket.on('humidity', (humidity) => this.weather.humidity = (humidity));
  }

  // For Google Maps place autocomplete api
  getWeather(place) {
    console.log("Get weather button clicked")
    let place_id = this._httpService.getWeather(place);
    place_id.subscribe((data: any) => this.place_id = data.predictions.place_id);
    if(place_id != null) {
      // For Google Maps geocode api
      console.log("Sending place_id for coordinates");
      let coord = this._httpService.getLatLng(this.place_id);
      coord.subscribe((data: any) => this.coord = data.results.geometry.location);
      console.log(this.coord);
    }
  }

}
