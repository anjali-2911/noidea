import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
      
  }
  onCheckboxClick(todo: Todo ){
    this.todoCheckbox.emit(todo);
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onclick got triggered");
  }
}
