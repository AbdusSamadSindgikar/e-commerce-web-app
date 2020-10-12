import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  constructor(private courseService:CoursesService) { }
  courses:any[]
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(courses=>{
        this.courses=courses;
    })

  }

  displayedColumns: string[] = ['categorie', 'description', 'price', 'title','urlImage'];
}
