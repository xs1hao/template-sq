import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
// import { EventEmitter } from 'protractor';
import {cloneDeep} from 'lodash';

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

  ngOnChanges(changes:SimpleChanges){
    if(changes.listOfData){
      this.listOfData = cloneDeep(this.listOfData);
    }
  }

  innerDrop(e) {
    this.drop.emit(e)
  }

}
