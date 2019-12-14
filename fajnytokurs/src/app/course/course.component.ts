import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Course from '../models/course.model'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  course :Course

  @Output() 
  removeCourse = new EventEmitter<Course>();

  constructor() { 
    
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

}
