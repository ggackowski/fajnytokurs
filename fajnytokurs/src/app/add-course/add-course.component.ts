import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Course from '../models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  newCourse :Course = new Course;


  constructor(private courseService: CourseService ) { }

  addCourse(event) {
    event.preventDefault;
    this.courseService.addCourse(this.newCourse);
  }

  ngOnInit() {
  }






}
