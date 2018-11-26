import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { HttpService } from './http.service';
import * as io from 'socket.io-client';
import { MapsAPILoader } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import { FormControl } from '@angular/forms';

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

  constructor(
    private _httpService: HttpService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  @ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit() {
    // Set google maps defaults
    this.zoom = 4;
    this.latitude = 34.0522;
    this.longitude = 118.2437;

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    // Load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place);

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // Set latitiude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation in navigator") {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}








