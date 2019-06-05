import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MustMatch } from './ps-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registration : FormGroup;
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {

    this.fbGroupForm();
    //this.formGroupType();
    // this.registration.valueChanges.subscribe(data => {
    //   console.log(data);
    // });
  }


  fbGroupForm(){
    const passwordPattern = "^[a-z0-9_-]{8,15}$"; 
    this.registration = this.fb.group({
      firstname: ["Gaurav", [Validators.required, Validators.minLength(3)]],
      lastname: ["Asija"],
      emailid: ["gaurav.designer01@gmail.com", [Validators.required, Validators.email]],
      newPassword: this.fb.group({
       npassword: ["gaur1234", [Validators.required, Validators.pattern(passwordPattern)]],
       cpassword: ["gaur1234", [Validators.required, Validators.pattern(passwordPattern)]]
      }, {
        validator: MustMatch('npassword', 'cpassword')
    })
    });
  }

  

  // formGroupType(){
  //   const passwordPattern = "^[a-z0-9_-]{8,15}$"; 
  //   this.registration = new FormGroup({
  //     firstname: new FormControl("Gaurav", [Validators.required, Validators.minLength(3)]),
  //     lastname: new FormControl("Asija"),
  //     emailid: new FormControl("gaurav.designer01@gmail.com", [Validators.required, Validators.email]),
  //     newPassword: new FormGroup({
  //       npassword: new FormControl("gaur1234", [Validators.required, Validators.pattern(passwordPattern)]),
  //       cpassword: new FormControl("gaur1234", [Validators.required, Validators.pattern(passwordPattern)])
  //     }, {
      //   validator: MustMatch('npassword', 'cpassword')
      // })
  //   });
  // }

  get form() { return this.registration.controls; }


  submitForm(){
    if(this.registration.valid){
      console.log(this.registration);
      alert("Form Submitted!");
    }
    //console.log(this.registration.value);
    //console.log(this.registration.getRawValue());
  }

  resetForm(){
    this.registration.reset();
  }

}
