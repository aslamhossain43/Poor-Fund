import { Component, OnInit, HostBinding } from '@angular/core';
import { GrantedList } from './granted-list';
import { GrantedListService } from './granted-list.service';
import { fromLeft } from '../router.animations';

@Component({
  selector: 'app-granted-list',
  templateUrl: './granted-list.component.html',
  styleUrls: ['./granted-list.component.scss'],
  animations: [fromLeft()]
})
export class GrantedListComponent implements OnInit {
grantedList: GrantedList[];
granted = 'Granted';
  constructor(private grantedListService: GrantedListService) { }
@HostBinding('@fromLeft')
  ngOnInit(): void {
  this.getGrantedList();
  }

getGrantedList(): void {
this.grantedListService.getGrantedList()
.subscribe((grantedList) => {
  this.grantedList = grantedList;
  console.log(grantedList);
},
(error) => {
});

}
}
