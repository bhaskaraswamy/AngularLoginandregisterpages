import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { HeaderComponent } from './modules/frountend/components/header/header.component';
import { MainComponent } from './modules/frountend/components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCustomizationComponent } from './modules/frountend/components/product-customization/product-customization.component';
import { MainIndexComponent } from './modules/frountend/components/main-index/main-index.component';


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
    path:"store",
    loadChildren:()=>
        import('./modules/frountend/frountend.module').then(m=>m.FrountendModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
