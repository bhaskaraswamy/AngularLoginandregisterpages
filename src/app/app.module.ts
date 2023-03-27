import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './modules/frountend/components/header/header.component';
import { MainComponent } from './modules/frountend/components/main/main.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CarouselPageComponent } from './modules/frountend/components/carousel-page/carousel-page.component';
import { FooterComponent } from './modules/frountend/components/footer/footer.component';
import { BodyComponent } from './modules/frountend/components/body/body.component';
import { ProductsComponent } from './modules/frountend/components/products/products.component';
import { ProductmodelComponent } from './modules/frountend/components/productmodel/productmodel.component';
import { ProductCustomizationComponent } from './modules/frountend/components/product-customization/product-customization.component';
import { MainIndexComponent } from './modules/frountend/components/main-index/main-index.component';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpPageComponent,
    HeaderComponent,
    MainComponent,
    LoadingIndicatorComponent,
    ForgotPasswordComponent,
    CarouselPageComponent,
    FooterComponent,
    BodyComponent,
    ProductsComponent,
    ProductmodelComponent,
    ProductCustomizationComponent,
    MainIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    // sReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
