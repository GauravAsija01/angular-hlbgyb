import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoInput;

  todos = [
    {id: 1, taskName: "Hello 1", isCompleted: false},
    {id: 2, taskName: "Hello 2", isCompleted: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
