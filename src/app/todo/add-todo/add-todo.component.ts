import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title = '';


  @Output() createTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    console.log("New Added -- ", this.title);
    this.createTodo.emit(this.title);
    this.title = '';

  }

}
