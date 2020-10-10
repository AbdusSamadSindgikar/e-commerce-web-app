import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';

import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material-ui.module';
import { AppModuleMenu } from './modules/menu/app.module';
import { AppModuleCommon } from './modules/common/app.module';
import { AppModuleAuthen } from './modules/authen/app.module';
import { AppModuleCourses } from './modules/courses/app.module';
import { AppModuleOrders } from './modules/orders/app.module';
import { AppModuleUsers } from './modules/users/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
    AngularFireAuthModule,
    MaterialModule,
    AppModuleMenu,
    AppModuleCommon,
    AppModuleAuthen,
    AppModuleCourses,
    AppModuleOrders,
    AppModuleUsers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
