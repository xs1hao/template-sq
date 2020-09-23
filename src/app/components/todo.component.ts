import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  listOfData1 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  listOfData2 = [
    {
      key: '4',
      name: '11111',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '5',
      name: '22222',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '6',
      name: '33333',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
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
  }
}
