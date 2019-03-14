import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Weather {
    constructor(
        public temp: number,
        public windSpeed: number,
        public humidity: number,

    ) {}
}

@Injectable({
    providedIn: 'root'
})

export class CourseAdapter implements Adapter<Weather> {
    adapt(item: any): Weather {
        return new Weather(
            item.temp,
            item.windSpeed,
            item.humidity,
        );
    }
}
