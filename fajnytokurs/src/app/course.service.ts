import { Injectable } from '@angular/core';
import Course from './models/course.model'
import SampleCourses from './data/sample-courses'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  c = new SampleCourses;
  getCourses() {
     return this.c.getSampleCourses(); 
  }

  getCourse() {

  }

  addCourse() {

  }

  deleteCourse() {

  }

  constructor() { }
}
