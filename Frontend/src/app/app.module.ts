import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/auth/login/login.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { HomeComponent } from './client/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
