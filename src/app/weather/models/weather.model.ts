export class WeatherModel {
    public temp: number;
    public humidity: number;
    public cloudiness: string;
    public sunrise: number;

    constructor(data) {
        this.temp = data.main.temp;
        this.humidity = data.main.humidity;
        this.cloudiness = data.weather[0].description;
        this.sunrise = data.sys.sunrise;
    }
}