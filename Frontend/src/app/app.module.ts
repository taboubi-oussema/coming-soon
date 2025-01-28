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
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountComponent } from './client/account/account.component';
import { JobsComponent } from './client/jobs/jobs.component';
import { ContactComponent } from './client/contact/contact.component';
import { FooterComponent } from './client/footer/footer.component';
import { AddJobComponent } from './add-job/add-job.component';
import { DashboarJobsComponent } from './client/dashboar-jobs/dashboar-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    AccountComponent,
    JobsComponent,
    ContactComponent,
    FooterComponent,
    AddJobComponent,
    DashboarJobsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
