import { Pipe, PipeTransform } from '@angular/core';
import Course from './models/course.model'

@Pipe({ name: 'searchPipe' })
export class SearchPipe implements PipeTransform {
 transform(courses: Course[], searchText: string): Course[] {
 if (!courses)
return [];
 if (!searchText)
return courses;
 searchText = searchText.toLowerCase();
 return courses.filter(course => {
 return course.name.toLowerCase().includes(searchText);
 });
 }
}
