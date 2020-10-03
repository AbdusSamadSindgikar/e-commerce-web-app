import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { CourseComponent } from './components/course/course.component';


@NgModule({
    declarations: [
    CourseComponent  
    
    ],
    imports: [
      MaterialModule
    ],
    exports:[CourseComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCourses { }