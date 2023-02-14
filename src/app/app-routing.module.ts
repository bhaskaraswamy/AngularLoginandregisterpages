import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';


const routes: Routes = [
  {
    component:OtpPageComponent,
    path:"OtpVerification"
  },
  {
    component:SignupComponent,
    path:"SighnUp"
  },
  {
    component:LoginComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
