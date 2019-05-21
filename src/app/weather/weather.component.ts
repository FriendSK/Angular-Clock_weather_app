import { Component } from '@angular/core';
import { WeatherService } from "../service/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})

export class WeatherComponent  {

  public city: string = "";
  public data: any;

  constructor(public weatherService: WeatherService) {
    this.data = this.weatherService.response;
  }
  
}









