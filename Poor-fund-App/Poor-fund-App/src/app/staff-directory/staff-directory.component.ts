import { Component, OnInit, HostBinding } from '@angular/core';
import { Staffs } from './staff-directory';
import { StaffDirectoryService } from './staff-directory.service';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-staff-directory',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.scss'],
  animations: [fromBottom()]
})
export class StaffDirectoryComponent implements OnInit {
// FOR MODEL
staffs: Staffs[];
  constructor(private staffDirectoryService: StaffDirectoryService) { }
@HostBinding('@fromBottom')
  ngOnInit(): void {
  this.getAllStaff();
  }
  getAllStaff(): void {
    this.staffDirectoryService.getStaff()
    .subscribe((staffs) => {
  this.staffs = staffs;
    },
    (error) => {

    });
  }

}

