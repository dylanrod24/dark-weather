import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { HttpService } from './http.service';
import * as io from 'socket.io-client';
import { FormControl } from '@angular/forms';
import { google } from '@agm/core/services/google-maps-types';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private _httpService: HttpService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    // Set google maps defaults
    this.zoom = 4;
    this.latitude = 34.0522;
    this.longitude = 118.2437;

    this.searchControl = new FormControl();

  }

  
}








