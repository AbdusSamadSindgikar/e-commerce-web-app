import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      MaterialModule,
      AppRoutingModule
    ],
    exports:[LoginComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAuthen { }