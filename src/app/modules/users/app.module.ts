import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    declarations: [
      
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