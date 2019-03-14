import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-default-city',
  templateUrl: './default-city.component.html',
  styleUrls: ['./default-city.component.css']
})

export class DefaultCityComponent implements OnInit {
  zoom: number;
  weather: any;
  temp: any;
  windSpeed: any;
  humidity: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    // this.getCurrentPosition();
    // this.getWeather();


    // Sockets connection to node server
    // const socket = io('http://localhost:4000');
    // console.log("sockets client connected to server");

    this._httpService.callWeather()
    .subscribe(
      (data) => {
        this.weather = data;
        console.log(data);
        this.temp = this.weather.main.temp;
        this.windSpeed = this.weather.wind.speed;
        this.humidity = this.weather.main.humidity;
      },
      (err) => {
        console.log("Server returned this error: ", err);
      },
      () => {
        console.log("Completed");
      }
    );
    console.log("Response from component");
  }

  // getCurrentPosition() {
  //   if ("geolocation in navigator") {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.location.lat = position.coords.latitude;
  //       this.location.lng = position.coords.longitude;
  //       console.log(this.location);
  //       this.zoom = 12;
  //     });
  //   }
  //   else {
  //     alert("Ooops, sorry couldn't find your location or Geolocation is not supported in your browser.");
  //   }
  // }

  // getWeather() {
  //   var getData = this._httpService.callWeather(this.location);
  //   console.log("from get weather: ", this.location);
  //   getData.subscribe((data: any) => {
  //     console.log(data);
  //   },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   )
  // }




}
