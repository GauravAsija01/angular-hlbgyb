import { TodoService } from './../service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  todos :any[] = [];
    // {id: 1, taskName: "Hello 1", isCompleted: false},
    // {id: 2, taskName: "Hello 2", isCompleted: true}


  title = '';
  expanded = true;
  classAdd = false;
  isCompleted = false;



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

  addNewTodo(){
    console.log("New Added -- ", this.title);
    this.todoService.addTodoRecord().subscribe((data) => {
      this.todos.push(data);
    },(err)=> {
      console.log(err);
    });
    //this.todos.push({id: this.todos.length + 1,taskName: this.title, isCompleted: false});
    //this.title = '';

  }
  onDelete(i){

    this.todos.splice(i, 1);

  }

  toggleTable(){
    console.log("Hide Show");
    this.expanded = !this.expanded;
    this.classAdd = !this.classAdd;
  }

  completedTask1(){
    // Add toggle Class name {taskDone} When click on checkbox True / False;
      // var i;
      // for(i = 0; i < this.todos.length; i++){
      //   if(this.todos[i].isCompleted == true){
      //       console.log("Done");

      //   }
      // }
      this.isCompleted = !this.isCompleted;}

  completedTask(){

  }



//   addTask(event){
//     event.preventDefault();
//     console.log(this.title);
//     var newTask = {
//         title: this.title,
//         isDone: false
//     }
//     //For Push in Database
//     //this.tasks.push(newTask);

//     //Push + Save in Database
//     this.tasksService.addTask(newTask)
//     .subscribe(task => {
//         this.tasks.push(task);
//         this.title = '';
//     })
// }

// deleteTask(id){
//     var tasks = this.tasks;

//     this.tasksService.deleteTask(id)
//     .subscribe(data => {
//             if(data.n == 1){
//                 for(var i = 0; i < tasks.length; i++){
//                     if(tasks[i]._id == id){
//                         tasks.splice(i,1);
//                     }
//                 }
//             }
//     })
// }









}
