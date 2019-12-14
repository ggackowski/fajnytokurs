import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'
import Course from '../models/course.model'
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses :Array<Course>;

  

  constructor(private courseService: CourseService ) {
    
  }

  getCourses() {
    this.courses = this.courseService.getCourses();
  }


  ngOnInit() {
    this.getCourses();
  }

  public removeCourse(c :Course) {
    console.log('remove course w liscie');
    this.courses = this.courses.filter(course => course !== c);
  }

}
