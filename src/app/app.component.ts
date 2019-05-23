import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  public date: Date;
  public isFullFormat: boolean = true;
  public isEuDate: boolean = true;
  public isClock: boolean = true;

  constructor() {
  }

  ngOnInit() {
  this.runApp();
  }

  private runApp () {
      setInterval(() => {
      this.date = new Date();
    }, 1000)
  }

  public leftClickFunc(): void {
    if (this.isClock) {
      this.isFullFormat = !this.isFullFormat;
    } else {
      this.isEuDate = !this.isEuDate;
    }
  }

  public rightClickFunc(): void {
    event.preventDefault();
    this.isClock = !this.isClock;
  }
}
