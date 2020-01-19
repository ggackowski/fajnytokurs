import { Injectable } from '@angular/core';
import Course from './models/course.model'
import SampleCourses from './data/sample-courses'
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  sc: SampleCourses;
  c: BehaviorSubject<Array<Course>>;
  courses = new Array<Course>();
  public data: Observable<any[]>;
  nextPushId: String;
  dbCourses: AngularFireList<Course>;
  constructor(private db: AngularFireDatabase) {
    this.dbCourses = db.list<Course>('/courses');
    this.data = this.dbCourses.valueChanges();
    this.data.subscribe(crs => {this.courses = crs});
    this.sc = new SampleCourses();
    
    this.c = new BehaviorSubject<Array<Course>>(this.courses);
  }

  getCourses(): Observable<Array<Course>> {
     console.log("from getcourses " + this.courses[0])
     
     return this.data;
  }

  getCourse(id) {
    //console.log(this.courses);
    //console.log(this.courses.filter(crs => crs.id == +id)[0])
    //return this.db.list<Course>(`/courses/${id}`).valueChanges();
    //return this.courses.filter(crs => crs.id == +id)[0];
    return this.db.object(`/courses/${id}`).valueChanges();
  }

  addCourse(course: Course) {
    // this.db.object()
    //console.log(this.db.createPushId());
    let key = this.dbCourses.push(course).key;
    course.id = key;
    this.db.object(`/courses/${key}`).update(course);
    //console.log(key);
    //this.db.object(`/courses/${key}`).
    //course.id = this.courses[this.courses.length-1].id + 1;
    //this.courses.push(course);
    //this.c.next(this.courses);
  }

  deleteCourse(course) {
    this.db.object(`/courses/${course.id}`).remove();
  }

  update(course) {
    this.db.object(`/courses/${course.id}`).update(course);
  }


}
