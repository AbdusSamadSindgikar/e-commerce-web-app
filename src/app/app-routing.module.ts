import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/common/components/home/home.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { CourseComponent } from './modules/courses/components/course/course.component';


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
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
