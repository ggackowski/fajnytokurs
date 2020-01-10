import { Component, OnInit, Input } from '@angular/core';
import Course from '../models/course.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { CourseService } from '../course.service';
import { SearchingService, SearchData } from '../searching.service'
import {AuthService} from '../auth.service'
import {environment } from '../../environments/environment'
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {


  course: Course;
  id: string;
  uid;

  public rateUpParent(rate) {

    if (this.course.rated.length == 0) {
      this.course.rating = rate;
      this.course.rated.push(this.uid);
    }
    if (!this.course.rated.includes(this.uid)) {
      this.course.rated.push(this.uid);
      console.log(this.course.rated.length);
      console.log(rate);
      //console.log(this.course.rating);
      let a:number = Number(this.course.rating);
      console.log(a);
      //console.log(((rate - this.course.rating) / this.course.rated.length));
      let b:number = Number(((rate - this.course.rating) / this.course.rated.length));
      console.log(b);
      console.log(a+b);
      this.course.rating = a+b;
      console.log(this.course.rating);

      //average = average + ((value - average) / nbValues)
    }
  }
  public rateDownParent() {
    this.course.rating--;
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService,
    private search: SearchingService,
    private authService: AuthService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getCourse(this.id).subscribe(
      c => {this.course = c;}
    );
    if (this.authService.user)
      this.uid = this.authService.user.uid;
    else
      this.uid = null;

  }

  enrolled() {
    if (this.course.maxStudents - this.course.enrolled.length == 0) return true;
    if (this.authService.user)
      return this.course.enrolled.includes(this.uid);
    else return false
    }
  enroll() {

    this.course.enrolled.push(this.uid);
  }



  resetSearch() {
    this.search.resetSearchData();
  }

  ngOnInit() {

  }

}
