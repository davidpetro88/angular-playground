import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  minDate = new Date();
  maxDate:Date;

  constructor() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 10);
  }

  ngOnInit(): void {
  }

  dateFilteOnlyWeekdays = (date: any) => {
    const day = date?.getDay();
    return day !== 0 && day !== 6;
  }

}
