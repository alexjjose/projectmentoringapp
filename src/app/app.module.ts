import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { BatchcordinatorComponent } from './batchcordinator/batchcordinator.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashComponent } from './admindash/admindash.component';
import { ManagementorComponent } from './managementor/managementor.component';
import { ManageprojectComponent } from './manageproject/manageproject.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { MentorregComponent } from './mentorreg/mentorreg.component';
import { MentordashComponent } from './mentordash/mentordash.component';

const myroutes=[
  {path:"student",component:StudentComponent},
  {path:"",component:NavbarComponent},
  {path:"studentsignup",component:StudentsignupComponent},
  {path:"mentorlogin",component:MentorloginComponent},
  {path:"batchcordinator",component:BatchcordinatorComponent},
  {path:"studentdash",component:StudentdashComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"managementor",component:ManagementorComponent},
  {path:"manageproject",component:ManageprojectComponent},
  {path:"managestudent",component:ManagestudentComponent},
  {path:"mentorreg",component:MentorregComponent},
  {path:"mentordash",component:MentordashComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    StudentsignupComponent,
    MentorloginComponent,
    BatchcordinatorComponent,
    StudentdashComponent,
    MentorregComponent,
    MentordashComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }