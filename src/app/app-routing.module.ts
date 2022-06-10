import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { AirlineComponent } from './Airline/airline.component';
import { ScheduleComponent } from './Airline/schedule/schedule.component';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { LoginComponent } from './home/login/login.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { SignupComponent } from './home/signup/signup.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'adminpanel', component: AdminpanelComponent },
  { path: 'adminsidebar', component: AdminsidebarComponent },
  { path: 'admindashborad', component: AdmindashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'airline', component: AirlineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
