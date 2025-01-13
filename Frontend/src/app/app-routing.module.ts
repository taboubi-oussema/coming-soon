import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/auth/login/login.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
