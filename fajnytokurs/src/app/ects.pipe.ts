import { Pipe, PipeTransform } from '@angular/core';
import Course from './models/course.model';
@Pipe({
  name: 'ects'
})
export class EctsPipe implements PipeTransform {
  transform(courses: Course[], filter): Course[] {



  }
 }
