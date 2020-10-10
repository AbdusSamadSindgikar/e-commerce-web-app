import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/common/components/home/home.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { CourseComponent } from './modules/courses/components/course/course.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { LoginService } from './modules/authen/services/login.service';


const routes: Routes = [
    {
      path:'',
      component:HomeComponent 
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'courses',
      component:CourseComponent
    },
    {
      path:'orders',
      component:OrdersComponent,
      canActivate:[LoginService]
    },
    {
      path:'admin-courses',
      component:AdminCoursesComponent,
      canActivate:[]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
