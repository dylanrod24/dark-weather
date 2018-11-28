import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as io from 'socket.io-client';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-default-city',
  templateUrl: './default-city.component.html',
  styleUrls: ['./default-city.component.css']
})
export class DefaultCityComponent implements OnInit {
  public zoom: number;
  public latitude: number;
  public longitude: number;
  coord = {
    lat: this.latitude,
    lng: this.longitude
  }
  weather = {timezone: "", temperature: "", humidity: "", windSpeed: ""};
  forecast = {tempMax: ""};
  
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
    this.getCurrentPosition();
    

    // Sockets connection to node server
    const socket = io('http://localhost:4000');
    console.log("sockets client connected to server");
    socket.on('temp', (temp) => this.weather.temperature = (temp));
    socket.on('windspeed', (windSpeed) => this.weather.windSpeed = (windSpeed));
    socket.on('humidity', (humidity) => this.weather.humidity = (humidity));
  }
  
  private getCurrentPosition() {
    if ("geolocation in navigator") {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coord.lat = position.coords.latitude;
        this.coord.lng = position.coords.longitude;
        this.zoom = 12;
        console.log(this.coord);
      });
    }
  }
}
