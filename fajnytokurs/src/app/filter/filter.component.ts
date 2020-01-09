import { Component, OnInit } from '@angular/core';
import { SearchingService, SearchData } from '../searching.service'




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  data: SearchData;
  checked = [false, false, false, false, false, false];


  constructor(private filter: SearchingService) {
    filter.getSearchData().subscribe(d => {
      this.data = d;
      this.checked[0] = (d.ectses ? d.ratings.filter(e => e === 0).length > 0  : false);
      this.checked[1] = (d.ectses ? d.ratings.filter(e => e === 1).length > 0  : false);
      this.checked[2] = (d.ectses ? d.ratings.filter(e => e === 2).length > 0  : false);
      this.checked[3] = (d.ectses ? d.ratings.filter(e => e === 3).length > 0  : false);
      this.checked[4] = (d.ectses ? d.ratings.filter(e => e === 4).length > 0  : false);
      console.log("subs")

    })

  }

  addRatingToFilter(event){
    console.log(event);
    if (this.data.ratings === undefined) {
      this.data.ratings = new Array<number>();
    }
    if (this.data.ratings.find(el => el == event.target.value))
      this.data.ratings = this.data.ratings.filter(el => el != event.target.value)
    else
      this.data.ratings.push(event.target.value);
    console.log(this.data.ratings)
    this.filter.setSearchData(this.data);

  }

  filterName() {

    this.filter.setSearchData(this.data);

  }

  check(event) {
    console.log("uwagha")
    console.log(this.data.ectses);
    console.log(event.target.value);
    if ((this.data.ectses.filter(e => e === event.target.value)).length > 0) {
      console.log("xd");
      this.checked[event.target.value] = true;
    }
    this.checked[event.target.value] = false;
  }

  ngOnInit() {
  }

}
