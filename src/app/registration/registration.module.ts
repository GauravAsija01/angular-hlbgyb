import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './component/registration.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsComponent
  ]
})
export class RegistrationModule { }
