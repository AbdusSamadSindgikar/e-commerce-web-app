import { Component, OnInit } from '@angular/core';
import { CatogoriesService } from 'src/app/modules/common/services/catogories.service';
import { CoursesService } from '../../services/courses.service';
import {mergeMap,map} from 'rxjs/operators';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private catService:CatogoriesService,private coursesServ:CoursesService) { }

  categories:any[]
  courses:any[]
  ngOnInit() {
  
      this.catService.getAllCategories().pipe(
        mergeMap(categories=>this.coursesServ.getAllCourses().pipe(
          map(courses=>[categories,courses])

          ))).subscribe(([categories,courses])=>{
                this.categories=categories;
                this.courses=courses;
                console.log(courses);
                console.log(categories);
              });

        
  
              
  }
                  getCoursesByCategorie(key)
                  {
                      return this.courses.filter(course=>course.categorie==key);
                  }
  
            

}
