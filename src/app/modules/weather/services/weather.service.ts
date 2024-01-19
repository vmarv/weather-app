import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private key: string = 'fb8cf1d1caaee423ff675f3f3fe53b96';

  constructor(
    private http: HttpClient
  ) { }

  getWatherDatas(cityName: string): Observable<any> {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${this.key}`

    return this.http.get(url);
  }
}
