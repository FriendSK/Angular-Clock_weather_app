import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  public API_KEY: string = 'abf4ec5fb246141571c859102bc01279';
  public city: string;
  public response: any;

  constructor(private http: HttpClient) {
  }

  getWeather(): any {

    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.API_KEY}`)
      .subscribe((response) =>{console.log(response);
       this.response = response});
  }
}
