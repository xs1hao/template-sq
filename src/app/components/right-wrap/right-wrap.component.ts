import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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


  innerDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.drop.emit()
  }

}
