import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material-ui.module';


import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
 



@NgModule({
    declarations: [
    AdminCoursesComponent
    
    ],
    imports: [
      MaterialModule,
      BrowserModule,
      CommonModule,
      
      
      
    ],
    exports:[],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCourses { }