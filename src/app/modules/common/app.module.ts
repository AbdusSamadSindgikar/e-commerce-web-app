import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      MaterialModule
    ],
    exports:[HomeComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCommon { }