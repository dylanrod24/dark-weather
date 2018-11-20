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
  
  newSearch = {search: ""};
  place_id = {place: ""};

  

  ngOnInit(){

    // Sockets connection to node server
  }

  // For Google Maps place autocomplete api
  getWeather(place) {
    console.log("Get weather button clicked")
    let place_id = this._httpService.getWeather(place);
    place_id.subscribe((data: any) => this.place_id = data.predictions.place_id);
    console.log(place_id);
  }
  
}
