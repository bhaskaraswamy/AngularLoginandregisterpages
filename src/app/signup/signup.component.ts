import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import agents from 'src/Model/agents';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Name:string="";
  // email:string="";
  // password:string="";
  UserData={Name:"",email:"",password:""};
  submitForm(){
    console.log(this.UserData);
    agents.Users.SignUp(this.UserData).then(Response=>console.log(Response)).catch(error =>console.log(error.data));
  }
  constructor(){
   
  }
  ngOnInit(){
    
  }
 
}
