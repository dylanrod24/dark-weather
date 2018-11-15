import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

    // Returns place_id
    getWeather(place) {
      console.log("place api response from service");
      return this._http.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=AIzaSyCCU62uzeDPHCiJtSIFtUVa5iq81EoSR_M`);
    }
    // Returns coordinates
    getLatLng(coord) {
      console.log("geocode api response from service");
      return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${coord}&key=AIzaSyCCU62uzeDPHCiJtSIFtUVa5iq81EoSR_M`);
    }
}
