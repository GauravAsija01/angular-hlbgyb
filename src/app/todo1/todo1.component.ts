import { TodoService } from './../service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {


    // {id: 1, taskName: "Hello 1", isCompleted: false},
    // {id: 2, taskName: "Hello 2", isCompleted: true}


  title = '';
  expanded = true;
  classAdd = false;
  isCompleted = false;
  todos :any[] = [];



  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //console.log(this.todos);
    this.fetchAllRecords();
  }


  fetchAllRecords(){
    this.todoService.getTodoRecords().subscribe((data) => {
      this.todos = data;
   },(err) => {
     console.log(err);
   });
  }

  addNewTodo(event){
    console.log("New Added -- ", this.title);
    var newRecord = {
      title: this.title,
      isCompleted: false
    }
    this.todoService.addTodoRecord(newRecord).subscribe((data) => {
      this.todos.push({newRecord});
      console.log(data);
      console.log(newRecord);
      this.title = '';
    },(err)=> {
      console.log(err);
    });
    //this.todos.push({id: this.todos.length + 1,taskName: this.title, isCompleted: false});


  }
  onDelete(i){

    this.todos.splice(i, 1);

  }

  toggleTable(){
    console.log("Hide Show");
    this.expanded = !this.expanded;
    this.classAdd = !this.classAdd;
  }



  completedTask(){

  }






}
