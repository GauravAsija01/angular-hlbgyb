import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registration : FormGroup;
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {

    this.fbGroupForm();
  }


  fbGroupForm(){
    this.registration = this.fb.group({
      firstname: ["Gaurav", [Validators.required, Validators.minLength(3)]],
      lastname: ["Asija"],
      emailid: ["gaurav.designer01@gmail.com"],
      newPassword: this.fb.group({
       npassword: ["gaur1234", [Validators.required]], //Validators.pattern('^(?=.*\d).{4,8}$')]
       cpassword: ["gaur1234", [Validators.required]]
      })

      // password: this.fb.group({
      //    npassword: ["gaur1234"],
      //    cpassword: ["gaur1234"]
      //   })

    });
  }



  submitForm(){
    console.log(this.registration.value);
    //console.log(this.registration.getRawValue());
  }

}
