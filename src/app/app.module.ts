import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';




import { AppComponent } from './app.component';
import { Practice1Component } from './practice1.component';
import { Todo1Component } from './todo1/todo1.component';
import { TodoLayoutComponent } from './todo/todo-layout/todo-layout.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoDataComponent } from './todo/todo-data/todo-data.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
// import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    Todo1Component,
    TodoLayoutComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoDataComponent,
    TemplateFormsComponent
    // ReactiveFormsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
