import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {cloneDeep} from 'lodash';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList = [
    'Learn Angular 7',
    'Finish Laundry',
    'Go Shopping',
    'Clean my room'
  ];
  doneList = [
    'Breakfast',
    'Wash dishes'
  ];

  listOfData1: any = [
    {
      key: '1',
      name: '小花',
      age: 'aaaaa',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: '旺财',
      age: 'bbbbb',
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: '二蛋',
      age: '55555',
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  listOfData2: any = [
    {
      key: '4',
      name: '11111',
      age: 32,
      address: 'New York No. 1 Lake Park'
    }
  ];
  drop() {
    console.log(this.listOfData1);
    console.log(this.listOfData2);

  }
}
