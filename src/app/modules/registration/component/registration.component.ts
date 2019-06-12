import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MustMatch } from './ps-match.validator';
import { RegistrationService } from '../service/registration.service';


  function requiredControl(control: AbstractControl):{[key : string]: boolean } | null {
      if(control.value.length === 0){
          return { 'invalid-error' : true }
      }
    return null;
  }


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration : FormGroup;
  usersdata :any[] = [];
  submitted = false;
  firstname = '';
  lastname = '';
  emailid = '';
  npassword = '';
  cpassword = '';
  showRegister = false;

  constructor(private fb:FormBuilder, private registrationservice : RegistrationService ) { }

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
     firstname: [""
     , [requiredControl, Validators.minLength(3)]
    ],
     lastname: [""],
     emailid: [""
     , [Validators.required, Validators.email]
    ],
     newPassword: this.fb.group({
     npassword: [""
     , [Validators.required, Validators.pattern(passwordPattern)]
    ],
      cpassword: [""
      , [Validators.required, Validators.pattern(passwordPattern)]
    ]
     }
     , {
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


  addNewUser(data){
    console.log(this.registration);
      // const fname = this.registration.controls.firstname.value;
      // const lname = this.registration.controls.lastname.value;
      // const email = this.registration.controls.emailid.value;
      // const npass = this.registration.controls.npassword.value;
      // const cpass = this.registration.controls.cpassword.value;
      // const newUser = {
      //   id: '', firstname: fname, lastname: lname, emailid : email, npassword: npass, cpassword: cpass
      // }
      const obj = this.registration.value;
      this.submitted = true;
      if(this.registration.valid){
        const newUser = {
            id: '', firstname: obj.firstname, lastname: obj.lastname, emailid : obj.emailid, npassword: obj.newPassword.npassword, cpassword: obj.newPassword.cpassword
          }
        this.registrationservice.addUsers(newUser).subscribe((data) => {
          this.usersdata.push(data);
          alert("Record Added Successfully");
          console.log(data, "Data");
          console.log(newUser, "New Record");
        },(err)=> {
          console.log(err);
        });
      }
    //console.log(this.registration.value);
    //console.log(this.registration.getRawValue());
  }

  resetForm(){
    this.registration.reset();
  }

  // showToggle(){
  //   this.showHideToggle = this.showHideToggle;
  // }

  showLoginForm(){
    console.log("Show Login Form");
    this.showRegister = !this.showRegister;
  }

  

  



}
