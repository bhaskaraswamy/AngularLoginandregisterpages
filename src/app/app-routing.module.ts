import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';


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
  },
  {
    component:MainComponent,
    path:"index"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
