import { Injectable } from '@angular/core';
import Course from './models/course.model'
import SampleCourses from './data/sample-courses'
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  sc: SampleCourses;
  c: BehaviorSubject<Array<Course>>;
  courses = new Array<Course>();

  constructor() {
    this.sc = new SampleCourses();
    this.courses = this.sc.getSampleCourses();
    this.c = new BehaviorSubject<Array<Course>>(this.courses);
  }

  getCourses(): Observable<Array<Course>> {
     return this.c.asObservable();
  }

  getCourse(id) {
    return this.getCourses().pipe(
      // (+) before `id` turns the string into a number
      map((cs: Course[]) => cs.find(course => course.id === +id)));
  }

  addCourse(course: Course) {
    course.id = this.courses[this.courses.length-1].id + 1;
    this.courses.push(course);
    this.c.next(this.courses);
  }

  deleteCourse(cours) {
    this.courses = this.courses.filter(course => course !== cours);
    this.c.next(this.courses);
  }


}
