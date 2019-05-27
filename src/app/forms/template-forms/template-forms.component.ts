import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  email = "gaurav.designer01@gmail.com";
  password = "1234565789";

  constructor() { }

  ngOnInit() {


  }

  submitLogin(formData){
    console.log(formData);
  }

}
