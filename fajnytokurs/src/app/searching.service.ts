import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class SearchData {
  ratings: Array<number>;
  semesters: Array<number>;
  name: string;
  ectses: Array<number>;
}

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  data: SearchData;
  subject: BehaviorSubject<SearchData>;
  constructor() {
    this.data = {
      ratings: undefined,
      semesters: undefined,
      name: undefined,
      ectses: undefined
    };
    this.subject = new BehaviorSubject<SearchData>(this.data);
  }

  getSearchData() {
    return this.subject.asObservable();
  }

  setSearchData(data: SearchData) {

    this.subject.next(data);
  }

  resetSearchData() {
    this.data = {
      ratings: undefined,
      semesters: undefined,
      name: undefined,
      ectses: undefined
    };
    this.subject.next(this.data);
  }
}

