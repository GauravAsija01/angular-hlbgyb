import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.css']
})
export class TodoLayoutComponent implements OnInit {

  //newtodo = '';
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
  //   console.log(todoName);
  //   this.newtodo = todoName;
  }

}
