import { Component, Input } from '@angular/core';
import { WeatherService } from "../service/weather.service";
import { WeatherModel } from './models/weather.model'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less'],
  providers: [WeatherService]
})

export class WeatherComponent {

  public data: any;

  constructor(private weatherService: WeatherService) {
  }
  @Input() weather: WeatherModel;

  public getWeatherByClick() {
    this.weatherService.getWeather()
      .subscribe((response) =>
        this.data = new WeatherModel(response));
  }
}









