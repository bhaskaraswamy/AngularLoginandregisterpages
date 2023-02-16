import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import agents from 'src/Model/agents';
import { ToastrService } from 'ngx-toastr';
// import toast from 'toast'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnChanges {
  // Name:string="";
  // email:string="";
  // password:string="";
  isLoading=false;
  UserData={name:"",email:"",password:"",confirmPassword:"",otp:""};
  Errors={name:"",email:"",password:"",ConfirmPassword:""};
  submitForm(){
    this.isLoading=true;
    console.log(this.UserData);
    agents.Users.SignUp(this.UserData)
    .then(Response=>{
      console.log(Response)
      this.toastr.success("You are succesfully registerd")
      this.router.navigate([""]);
    })
    .catch(error =>{
      if(error.response.status == 401)
      {
         this.toastr.error("Email already exist");
      }
      this.Errors.name=error.response.data.errors.Name,
      this.Errors.email=error.response.data.errors.Email,
      this.Errors.password=error.response.data.errors.Password,
      this.Errors.ConfirmPassword=error.response.data.errors.ConfirmPassword
    }).finally(()=>
      this.isLoading=false
    );
  }
  constructor(private toastr: ToastrService,private router:Router ){
   
  }
  ngOnChanges() {
   
  }
  ngOnInit(){
  }
 
}
