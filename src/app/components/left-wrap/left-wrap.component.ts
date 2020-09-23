import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-wrap',
  templateUrl: './left-wrap.component.html',
  styleUrls: ['./left-wrap.component.css']
})
export class LeftWrapComponent implements OnInit {

  @Input() todoList;
  @Input() listOfData;
  @Output() drop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  innerDrop(e) {
    this.drop.emit(e)
  }

}
