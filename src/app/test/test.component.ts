import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  localItem : string | null;
  todos1:Todo[] ;
  constructor() {
    this.localItem = localStorage.getItem("todos1");
    if(this.localItem == null){

      this.todos1 = [];
    } 
    else{
      this.todos1 = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
    
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos1.indexOf(todo);
    this.todos1.splice(index,1);
    localStorage.setItem("todos1", JSON.stringify(this.todos1));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos1.push(todo);
    localStorage.setItem("todos1", JSON.stringify(this.todos1));

  }
  toggleTodo(todo:Todo){
    const index = this.todos1.indexOf(todo);
    this.todos1[index].active = !this.todos1[index].active;
    localStorage.setItem("todos1", JSON.stringify(this.todos1));

  }
}
