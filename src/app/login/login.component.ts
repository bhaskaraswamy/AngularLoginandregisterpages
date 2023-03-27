import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import axios,{AxiosInstance} from 'axios';

import agents from 'src/Model/agents';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserData={Email:"",password:""}
  Errors={email:"",password:""};
  isLoading=false;
  submitLogin(){
    this.isLoading=true;
    console.log(this.UserData);
    agents.Users.Login(this.UserData.Email,this.UserData.password)
    .then(Response=>{
      // console.log(Response);
      agents.Users.SentOTP(Response.id).then(otpResponse=>{
        console.log(otpResponse);
        localStorage.setItem('Userid',Response.id);
        this.toast.success("we have sent one OTP to your email")
        this.route.navigate(["OtpVerification"])
      }).catch(err=>{
        this.toast.error("error.response.data.errors");
      })
    })
    .catch(error=>{
      // console.log(error.response);
      if(error.response.status === 404)
      {
        this.toast.error(error.response.data)
      }
      this.Errors.email=error.response.data.errors.Email;
      this.Errors.password=error.response.data.errors.password;
      
    }).finally(()=>{
      this.isLoading=false;
    });
    
  }
  constructor(private toast:ToastrService,private route:Router){
    
  }
  ngOnInit(){
    console.log("----oninit-----")
  }
}
