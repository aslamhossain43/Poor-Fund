import { Component, OnInit, HostBinding } from '@angular/core';
import { CurrentYearGrantedList } from './current-year-granred-list';
import { CurrentYearGrantedListService } from './current-year-granred-list.service';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-current-year-granred-list',
  templateUrl: './current-year-granred-list.component.html',
  styleUrls: ['./current-year-granred-list.component.scss'],
  animations: [fromBottom()]
})
export class CurrentYearGranredListComponent implements OnInit {
  currentYearGrantedList: CurrentYearGrantedList[];
  granted = 'Granted';
    constructor(private currentYearGrantedListService: CurrentYearGrantedListService) { }
   @HostBinding('@fromBottom')
    ngOnInit(): void {
    this.getCurrentYearGrantedList();
    }
  getCurrentYearGrantedList(): void {
  this.currentYearGrantedListService.getCurrentYearGrantedList()
  .subscribe((currentYearGrantedList) => {
    this.currentYearGrantedList = currentYearGrantedList;
    console.log(currentYearGrantedList);
  },
  (error) => {
  });
  }


}
