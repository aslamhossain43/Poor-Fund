import { Component, OnInit, HostBinding, ViewChild, HostListener } from '@angular/core';
import { Email } from './email-sending';
import { EmailSendingService } from './email-sending.service';
import { Response } from '@angular/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { fromBottom } from '../router.animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.scss'],
  animations: [fromBottom()]
})
export class EmailSendingComponent implements OnInit {
  // ----------------------------------------------
// DATA TABLE
  displayedColumns = ['id', 'to', 'subject', 'message','createdDate','lastModifiedDate'];
  dataSource: MatTableDataSource<Email>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // -------------------------------------------

  msg = 'off';
  email = new Email();
  emails: Email[];

  constructor(private emailService: EmailSendingService) {

  }
  
  ngOnInit() {
this.gettingEmails();
  this.dataSource = new MatTableDataSource();
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
//----------------------------------------------------------------------------------
  sendingEmail(): void {
    this.msg = '';
    this.emailService.sendingEmail(this.email)
      .subscribe((response) => {
       
        alert('Email has been sent!!!');
        this.msg = 'offMsg';
console.log('From method : sendingEmail(),,,'+response);
      },
        (error)=> {
          console.log('From method : sendingEmail(),,,'+error)
          alert('Fail your operation !!!');
        });

  }

//---------------------------------------------------------------------------------------
  updateEmail(): void {
    this.msg = '';
    this.emailService.sendingEmail(this.email)
      .subscribe(response => {
       
        alert('Email has been sent!!!');
        this.msg = 'offMsg';
console.log('From method : updateEmail(),,,'+response);
      },
        (error)=> {
          console.log('From method : updateEmail(),,,'+error)
          alert('Fail your operation !!!');
        });

  }

//------------------------------------------------------------------------------------
  gettingEmails(): void {
    this.emailService.getEmails()
    .subscribe(data=>{
      this.emails = data;
      this.dataSource.data=data;
      console.log('From method : gettingEmails(),,,'+this.emails);
    },
    error=>{
      console.log('From method : gettingEmails(),,,'+error);
    })
  }

//------------------------------------------------------------------------------------
  gettingEmail(id:string): void {
    this.emailService.getEmail(id)
    .subscribe(data=>{
      this.email = data;
      console.log('From method : gettingEmail(),,,'+data);
    },
    error=>{
      console.log('From method : gettingEmail(),,,'+error);
    })
  }
//--------------------------------------------------------------------------------------
  deleteEmail(id: string) {
    this.emailService.deleteEmail(id)
      .subscribe(response =>{
        console.log('From method : deleteEmail(),,,'+response);
      },
        error => {
          console.log('From method : sendingEmail(),,,'+error)
        });

  }

// data table------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------------
