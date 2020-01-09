import { Component, OnInit, Input } from '@angular/core';
import Course from '../models/course.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { CourseService } from '../course.service';
import { SearchingService, SearchData } from '../searching.service'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {


  course: Course;
  id: string;

  public rateUpParent() {
    this.course.rating++;
  }
  public rateDownParent() {
    this.course.rating--;
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService,
    private search: SearchingService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getCourse(this.id).subscribe(
      c => {this.course = c;}
    );


  }

  resetSearch() {
    this.search.resetSearchData();
  }

  ngOnInit() {

  }

}
