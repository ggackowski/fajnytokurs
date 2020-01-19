import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Course from '../models/course.model';
import { CourseService } from '../course.service';
import { registerLocaleData } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  newCourse :Course = new Course;


  constructor(private courseService: CourseService, private router: Router ) {
    this.newCourse.enrolled = [''];
    this.newCourse.rated = [''];
    this.newCourse.rating = 0;
  }

  addCourse(event) {
    event.preventDefault();
    this.courseService.addCourse(this.newCourse);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }






}
