import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminCoursesComponent } from '../admin/components/admin-courses/admin-courses.component';


@NgModule({
    declarations: [
      AdminCoursesComponent
    ],
    imports: [
      MaterialModule,
      AppRoutingModule
    ],
    exports:[],
    providers: [],
    bootstrap: []
  })
  export class AppModuleUsers { }