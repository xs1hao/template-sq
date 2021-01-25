import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {
  date = null;
  constructor() { }

  ngOnInit() {
  }

  onChange(eve){
    console.log(eve);
  }

}
