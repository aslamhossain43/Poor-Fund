import { Component, OnInit, TemplateRef, HostBinding } from '@angular/core';
import { Staff } from './manage-staff';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ManageStaffService } from './manage-staff.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Response } from '@angular/http';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss'],
  animations: [fromBottom()]
})
export class ManageStaffComponent implements OnInit {

  // FOR MESSAGE
  msg = '';
  // FOR NGX BOOTSTRAP  MODAL
  public modalRef: BsModalRef;
  // FOR FILE
  selectedSFiles: FileList;
  currentSFiles: File;
  // FOR MODEL
  staff = new Staff();
  staffs: Staff[];
  // FORM FIELD CONTROL
  selectedSFileControl = new FormControl('', [Validators.required]);
   staffNameFormControl = new FormControl('', [Validators.required]);
  staffJobFormControl = new FormControl('', [Validators.required]);
  staffDetailsFormControl = new FormControl('', [Validators.required]);

  biodataForm: FormGroup = new FormGroup({
    sfile: this.selectedSFileControl,
    name: this.staffNameFormControl,
    job: this.staffJobFormControl,
    details: this.staffDetailsFormControl
  });
  getRequiredErrorMessage(field) {
    if (this.biodataForm.get(field).hasError('required')) {
      return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
    }
  }
  constructor(private staffService: ManageStaffService,
     // FOR NGX BOOTSTRAP  MODAL
     private modalService: BsModalService) { }
     @HostBinding('@fromBottom')
  ngOnInit(): void {
    this.getAllStaff();
   }
    // FOR NGX BOOTSTRAP  MODAL
 public openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template); // {3}
 }
  // FOR FILE
  selectSFile(event) {
  this.selectedSFiles = event.target.files;
  }
  addStaff() {
    this.msg = 'onMsg';
    this.currentSFiles = this.selectedSFiles.item(0);
    this.staffService.pushStaffFiles(this.currentSFiles, this.staff.name, this.staff.job
      , this.staff.details, this.staff.id, this.staff.createdDate)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          alert('Your operation has been completed successfully !');
          this.msg = '';
        }
      }, (error) => {
        alert('Fail operation ! ,please insert valid value !!!');
        this.msg = '';
        this.reset();
      });

  }

getAllStaff(): void {
  this.staffService.getStaff()
  .subscribe((staffs) => {
this.staffs = staffs;
  },
  (error) => {

  });
}
getStaffById(id: string): void {
  this.staffService.getStaffById(id)
  .subscribe((staff) => {
this.staff = staff;
  },
  (error) => {

  });
}
deleteStaff(id: string) {
  this.staffService.deleteStaff(id)
  .subscribe((response: Response) => {
this.getAllStaff();
  });
}
  reset() {
    this.staff.sfile = null;
    this.staff.name = null;
    this.staff.job = null;
    this.staff.details = null;
  }

}
