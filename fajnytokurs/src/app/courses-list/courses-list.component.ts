import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService } from '../course.service'
import { SearchingService, SearchData } from '../searching.service'
import Course from '../models/course.model'
import { SearchPipe } from '../search-pipe.pipe'


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Array<Course>;

  data: SearchData;
  searching: SearchPipe = new SearchPipe();
  constructor(private courseService: CourseService, private searchingService: SearchingService) {

  }

  getCourses() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
      }
    );

  }

  test() {
    console.log(this.data.name != undefined);
  }

  ngOnInit() {
    this.getCourses();
    this.searchingService.getSearchData().subscribe(d => {this.data = d; });
    

  }

 
  public removeCourse(event) {
    this.courseService.deleteCourse(event);
  }

}
