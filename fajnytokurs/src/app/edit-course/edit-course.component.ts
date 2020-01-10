import { Component, OnInit, OnChanges } from '@angular/core';
import {AuthService} from '../auth.service';
import Course from '../models/course.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '../course.service';
import { SearchingService, SearchData } from '../searching.service'

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  id: string;
  course: Course;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CourseService,
    private search: SearchingService,
    private authService: AuthService) {


      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id)
     }

    ngOnChanges() {
      this.service.getCourse(this.id).subscribe(
        c => {this.course = c;}
      );
    }

  ngOnInit() {
  }

  resetSearch() {
    this.search.resetSearchData();
  }

}
