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
   console.log("a")
   if (data.name != undefined) {
     console.log(data.name);
     data.name = data.name.toLowerCase();
     courses = courses.filter(course =>
       course.name.toLowerCase().includes(data.name)
     );
   }
   if (data.ratings != undefined && data.ratings.length > 0) {
     console.log(data.ratings)
     courses = courses.filter(
       course => data.ratings.find(rat => rat == course.id)

    )
   }
   console.log(data);
   return courses;
 }
}
