import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './home/login/login.component';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { SignupComponent } from './home/signup/signup.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { ScheduleComponent } from './Airline/schedule/schedule.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    SignupComponent,
    ResetpasswordComponent,
    AdminpanelComponent,
    AdmindashboardComponent,
    AdminsidebarComponent,
    ScheduleComponent,
 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSliderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
