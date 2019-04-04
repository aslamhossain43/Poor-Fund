import { Component, OnInit, HostBinding } from '@angular/core';
import { NotGrantedList } from './not-granted-list';
import { NotGrantedListService } from './not-granted-list.service';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-not-granted-list',
  templateUrl: './not-granted-list.component.html',
  styleUrls: ['./not-granted-list.component.scss'],
  animations: [fromBottom()]
})
export class NotGrantedListComponent implements OnInit {
  notGrantedList: NotGrantedList[];
  notGranted = 'Not-Granted';
  constructor(private notGrantedListService: NotGrantedListService) { }
@HostBinding('@fromBottom')
  ngOnInit(): void {
    this.notGetGrantedList();
    }



  notGetGrantedList(): void {
    this.notGrantedListService.getNotGrantedList()
    .subscribe((notGrantedList) => {
      this.notGrantedList = notGrantedList;
      console.log(notGrantedList);
    },
    (error) => {
    });
    }

}
