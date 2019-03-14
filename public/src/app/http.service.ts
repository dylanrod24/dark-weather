import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather, CourseAdapter } from './weather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/37.3861,122.0839';

  constructor(
    private _http: HttpClient,
    private adapter: CourseAdapter,
    ) { }

  callWeather(): Observable<Weather[]> {
    console.log("response from service");
    const url = `${this.baseUrl}`;
    return this._http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  
  }
}


