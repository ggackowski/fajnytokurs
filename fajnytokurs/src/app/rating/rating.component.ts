import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  rate :number = 0;
  @Output()
  rateUpParent = new EventEmitter<number>();
  @Output()
  rateDownParent = new EventEmitter<number>();

  rateUp() {
    console.log("rate up")
    this.rateUpParent.emit(1);
  }

  rateDown() {
    console.log("rate down")
    this.rateDownParent.emit(1);
  }

  constructor() { }

  ngOnInit() {

  }

}
