import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {cloneDeep} from 'lodash';

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
  ngOnchanges(changes:SimpleChanges){
    if(changes.listOfData){
      this.listOfData = cloneDeep(this.listOfData);
    }
  }

  innerDrop(e) {
    this.drop.emit(e)
  }

}
