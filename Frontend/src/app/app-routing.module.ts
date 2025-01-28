import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/auth/login/login.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { HomeComponent } from './client/home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountComponent } from './client/account/account.component';
import { JobsComponent } from './client/jobs/jobs.component';
import { ContactComponent } from './client/contact/contact.component';
import { AddJobComponent } from './add-job/add-job.component';
import { DashboarJobsComponent } from './client/dashboar-jobs/dashboar-jobs.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'Dashboar', component: DashboardComponent },
  { path: 'Dashboar-jobs', component:DashboarJobsComponent},
  { path: 'Account', component: AccountComponent },
  { path: 'Jobs', component: JobsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addJob', component: AddJobComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
