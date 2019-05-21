import { Component } from '@angular/core';
import { DateService } from "./service/date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  public date: Date;
  public isFullFormat: boolean = true;
  public isEuDate: boolean = true;
  public isClock: boolean = true;
 
  constructor(private dateService: DateService) {

    setInterval(() => {
      this.date = this.dateService.getDate();
    }, 1000)
  }

  leftClickFunc(): void {
    if (this.isClock) {
      this.isFullFormat = !this.isFullFormat;
    } else {
      this.isEuDate = !this.isEuDate;
    }
  }

  rightClickFunc(): void {
    event.preventDefault();
    this.isClock = !this.isClock;
  }

//   changeColor(): void {
//     let color = Math.random().toString().substr(-6);
//     this.color = `#${color}`;
// }

}
