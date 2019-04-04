import { Component, OnInit, HostBinding } from '@angular/core';
import { Grant } from './manage-granted-list';
import { AllCandidates } from './manage-granted-list.candidates';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ManageGrantedService } from './manage-granted-list.service';
import { fromRight } from '../router.animations';

@Component({
  selector: 'app-manage-granted-list',
  templateUrl: './manage-granted-list.component.html',
  styleUrls: ['./manage-granted-list.component.scss'],
  animations: [fromRight()]
})
export class ManageGrantedListComponent implements OnInit {
// FOR MESSAGE
msg = '';

// FOR FILE
selectedProvedFiles: FileList;
currentProvedFiles: File;
// FOR MODEL
grant = new Grant();
allCandidates: AllCandidates[];
// FORM FIELD CONTROL
selectedProvedFileControl = new FormControl('', [Validators.required]);
 grantIdFormControl = new FormControl('', [Validators.required]);
statusFormControl = new FormControl('', [Validators.required]);
biodataForm: FormGroup = new FormGroup({
  selectedProvedFile: this.selectedProvedFileControl,
  status: this.statusFormControl,
  grantId: this.grantIdFormControl
});
getRequiredErrorMessage(field) {
  if (this.biodataForm.get(field).hasError('required')) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
  }
}
constructor(private grantService: ManageGrantedService) { }
@HostBinding('@fromRight')
ngOnInit(): void {
  this.getAllCandidates();
}
// FOR FILE
selectProvedFile(event) {
this.selectedProvedFiles = event.target.files;
}




addGrant() {
  this.msg = 'onMsg';
  this.currentProvedFiles = this.selectedProvedFiles.item(0);
  this.grantService.pushGrantFiles(this.currentProvedFiles, this.grant.status,
    this.grant.grantId)
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

reset() {
  this.grant.selectedProvedFile = null;
  this.grant.grantId = null;
  this.grant.status = null;
}
// GET CANDIDATES
getAllCandidates(): void {
this.grantService.getAllCandidatesList()
.subscribe((allCandidates) => {
  this.allCandidates = allCandidates;
},
(error) => {
});

}



}
