import { Component, OnInit, } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather = {timezone: "", temperature: "", humidity: "", windSpeed: ""};

  ngOnInit() {
    const socket = io('http://localhost:4000');
    socket.on('temp', (temp) => this.weather.temperature = (temp));
    socket.on('windspeed', (windSpeed) => this.weather.windSpeed = (windSpeed));
    socket.on('humidity', (humidity) => this.weather.humidity = (humidity));
  }

}
