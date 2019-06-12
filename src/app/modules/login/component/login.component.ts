import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  showLogin = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginInt();
  }


  loginInt(){
    this.login = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  loginSubmit(){
    console.log(this.login);
  }

  // showToggle(){
  //   this.showHideToggle = !this.showHideToggle;
  // }

  showRegisterForm(){
    console.log("Show Register Form");
    this.showLogin = !this.showLogin;
  }

}
