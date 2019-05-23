import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private API_KEY: string = 'abf4ec5fb246141571c859102bc01279';
  private URL: string = 'http://api.openweathermap.org/data/2.5/weather?q='
  public city: string;

  constructor(private http: HttpClient) {
  }

  getWeather(): any {
    return this.http.get(`${this.URL}${this.city}&APPID=${this.API_KEY}`)
  }
}
