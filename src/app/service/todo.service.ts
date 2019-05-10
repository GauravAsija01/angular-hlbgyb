import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private getURL(url){
    return "http://localhost:3000/" + url;
  }


  getTodoRecords(){
     return this.http.get(this.getURL('todos'));
  }

  addTodoRecord(){
    return this.http.post(this.getURL('todos'));
  }



//   addTask(newTask){
//     console.log(newTask);
//     var headers = new Headers();
//     headers.append('Content-type', 'application/json');
//     return this._http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: headers})
//     .map(res => res.json());
// }

// deleteTask(id){
//     return this._http.delete('/api/task/'+id)
//     .map(res => res.json());
// }
}
