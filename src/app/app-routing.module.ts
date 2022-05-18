import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { LoginComponent } from './home/login/login.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { SignupComponent } from './home/signup/signup.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'resetpassword', component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
