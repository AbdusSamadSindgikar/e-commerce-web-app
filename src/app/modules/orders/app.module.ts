import {NgModule} from '@angular/core'

import { MaterialModule } from 'src/app/material-ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
    declarations: [
      
    OrdersComponent],
    imports: [
      MaterialModule,
      AppRoutingModule
    ],
    exports:[],
    providers: [],
    bootstrap: []
  })
  export class AppModuleOrders { }