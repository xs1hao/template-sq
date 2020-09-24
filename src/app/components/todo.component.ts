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
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);



    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    if (event.container.id === event.previousContainer.id){
      if(event.container.id == 'right'){
        this.listOfData2 = cloneDeep(event.container.data);
      }else{
        this.listOfData1 = cloneDeep(event.container.data);
      }
    } else {
      if (event.container.id == 'right'){ // 数据进入的容器是右侧的表格；
        this.listOfData2 = cloneDeep(event.container.data);
        this.listOfData1 = cloneDeep(event.previousContainer.data);
      } else {
        this.listOfData1 = cloneDeep(event.container.data);
        this.listOfData2 = cloneDeep(event.previousContainer.data);
      }
    }

    console.log(this.listOfData1);
    console.log(this.listOfData2);

  }
}
