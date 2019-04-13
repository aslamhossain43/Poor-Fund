import { Component, OnInit, HostBinding, ViewChild, HostListener } from '@angular/core';
import { Email } from './email-sending';
import { EmailSendingService } from './email-sending.service';
import { Response } from '@angular/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { fromBottom } from '../router.animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.scss'],
  animations: [fromBottom()]
})
export class EmailSendingComponent implements OnInit {
  // ----------------------------------------------
// DATA TABLE
  displayedColumns = ['id', 'to', 'subject', 'message'];
  dataSource: MatTableDataSource<Email>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // -------------------------------------------

  msg = 'off';
  email = new Email();
  emails: Email[];

  constructor(private emailService: EmailSendingService) {

    // ---------------------------------------------------
    // Create 100 users
  /*  const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
*/
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.emails);
   // -------------------------------------------------------

  }

  ngOnInit() {

  }

  @HostBinding('@fromBottom')

  toFormControl = new FormControl('', [Validators.required]);
  subjectFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);

  biodataForm: FormGroup = new FormGroup({
    to: this.toFormControl,
    subject: this.subjectFormControl,
    message: this.messageFormControl
  });


  // FOR STRING VALIDATION
  getRequiredErrorMessageForString(field) {
    if (this.biodataForm.get(field).hasError('required')) {
      return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
    }

  }

  sendingEmail(): void {
    this.msg = '';
    this.emailService.sendingEmail(this.email)
      .subscribe((response: Response) => {
        alert('Email has been sent!!!');
        this.msg = 'offMsg';
      },
        (error) => {
          alert('Fail your operation !!!');
        });



  }

  gettingEmails(): void {
    this.emailService.getEmails()
      .subscribe(email => {
        this.emails = email;
      });


  }

  deleteEmail(id: string) {
    this.emailService.deleteEmail(id)
      .subscribe(res => Response => {

      },
        (error) => {

        });

  }


  // data tables

  // ----------------------------------------------------------


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
*/
/** Constants used to fill up our data base. */
/*const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

*/
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


