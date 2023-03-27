import { Component } from '@angular/core';
import agents from 'src/Model/agents';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {
  isLoading=false;
  otp:string="";
  userid:any=localStorage.getItem('Userid');
  otpSubmit(){
    this.isLoading=true;
   agents.Users.VerifyOtp(this.userid,this.otp).then(Response=>{
     console.log(Response);
     this.toast.success(Response);
     this.route.navigate(["store/home"])
   }).catch(err=>{
     console.log(err);
     if(err.response.data == "You enter incorrect OTP")
     {
       this.toast.error(err.response.data);
     }
   }).finally(()=>{
     this.isLoading=false;
   })
  }
  constructor(private toast:ToastrService,private route:Router){
  
  }
}
