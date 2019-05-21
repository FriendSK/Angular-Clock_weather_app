import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent  {

  @Input() date: Date;
  @Input() isEuDate: boolean;
}
