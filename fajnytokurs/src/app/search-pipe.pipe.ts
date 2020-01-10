import { Pipe, PipeTransform } from '@angular/core';
import Course from './models/course.model'
import { SearchData } from './searching.service'

@Pipe({ name: 'searchPipe', pure: false })
export class SearchPipe implements PipeTransform {
 transform(courses: Course[], data: SearchData): Course[] {

   if (!courses)
     return [];
   if (!data)
     return courses;

   if (data.name != undefined) {

     data.name = data.name.toLowerCase();
     courses = courses.filter(course =>
       course.name.toLowerCase().includes(data.name)
     );
   }
   if (data.ratings != undefined && data.ratings.length > 0) {

     courses = courses.filter(
       course => data.ratings.find(rat => rat == course.rating)

    )
   }

   return courses;
 }
}
