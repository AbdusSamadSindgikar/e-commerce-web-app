import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material-ui.module';
import { CourseComponent } from './components/course/course.component';
import { from } from 'rxjs';



@NgModule({
    declarations: [
    CourseComponent  
    
    ],
    imports: [
      MaterialModule,
      BrowserModule
      
    ],
    exports:[CourseComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCourses { }