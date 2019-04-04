import { Component, OnInit, HostBinding } from '@angular/core';
import { CurrentYearNotGrantedList } from './current-year-not-granted-list';
import { CurrentYearNotGrantedListService } from './current-year-not-granted-list.service';
import { fromRight } from '../router.animations';

@Component({
  selector: 'app-current-year-not-granted-list',
  templateUrl: './current-year-not-granted-list.component.html',
  styleUrls: ['./current-year-not-granted-list.component.scss'],
  animations: [fromRight()]
})
export class CurrentYearNotGrantedListComponent implements OnInit {
  currentYearNotGrantedList: CurrentYearNotGrantedList[];
  notGranted = 'Not-Granted';
  constructor(private currentYearNotGrantedListService: CurrentYearNotGrantedListService) { }
@HostBinding('@fromRight')
  ngOnInit(): void {
    this.getCurrentYearNotGrantedList();
    }



  getCurrentYearNotGrantedList(): void {
    this.currentYearNotGrantedListService.getCurrentYearNotGrantedList()
    .subscribe((currenttYearNotGrantedList) => {
      this.currentYearNotGrantedList = currenttYearNotGrantedList;
      console.log(currenttYearNotGrantedList);
    },
    (error) => {
    });
    }

}
