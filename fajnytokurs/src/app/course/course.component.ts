import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Course from '../models/course.model'
import {AuthService} from '../auth.service'
import {environment } from '../../environments/environment'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  course :Course

  @Input()
  isEven :boolean

  @Output()
  removeCourse = new EventEmitter<Course>();

  constructor(private authService: AuthService) {

  }

  isAdmin() {
    if (!this.authService.user) return false;
    return environment.admins.includes(this.authService.user.uid);
  }

  ngOnInit() {
  }

  public remove() {
    console.log('remove w kursie');
    this.removeCourse.emit(this.course);
  }

public rateUpParent() {
    this.course.rating++;
  }
public rateDownParent() {
  this.course.rating--;
}

gridFormat() {
  if (this.isEven)
    return "card"
  return "card bg-light"
}

}
