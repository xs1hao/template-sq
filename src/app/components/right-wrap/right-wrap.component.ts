import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-right-wrap',
  templateUrl: './right-wrap.component.html',
  styleUrls: ['./right-wrap.component.css']
})
export class RightWrapComponent implements OnInit {

  @Input() doneList;
  @Input() listOfData;
  @Output() drop = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  innerDrop(e) {
    this.drop.emit(e)
  }

}
