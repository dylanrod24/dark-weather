import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as io from 'socket.io-client';

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

    // Sockets connection to node server
    const socket = io('http://localhost:4000');
    console.log("socket connected to server");
    socket.on('temp', (temp) => this.weather.temperature = (temp));
    // socket.on('pressure', (pressure) => this.weather.pressure = (pressure));

  }
}
