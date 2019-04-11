import { Component, OnInit, HostBinding } from '@angular/core';
import { NotGrant } from './manage-not-granted-list';
import { AllCandidates } from './manage-not-granted-list.candidates';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ManageNotGrantedListService } from './manage-not-granted-list.service';
import { fromLeft } from '../router.animations';

@Component({
  selector: 'app-manage-not-granted-list',
  templateUrl: './manage-not-granted-list.component.html',
  styleUrls: ['./manage-not-granted-list.component.scss'],
  animations: [fromLeft()]

})
export class ManageNotGrantedListComponent implements OnInit {
// FOR MESSAGE
msg = '';

// FOR MODEL
notGrant = new NotGrant();
allCandidates: AllCandidates[];
// FORM FIELD CONTROL

 notGrantIdFormControl = new FormControl('', [Validators.required]);
statusFormControl = new FormControl('', [Validators.required]);
biodataForm: FormGroup = new FormGroup({
  status: this.statusFormControl,
  notGrantId: this.notGrantIdFormControl
});
getRequiredErrorMessage(field) {
  if (this.biodataForm.get(field).hasError('required')) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
  }
}
constructor(private notGrantService: ManageNotGrantedListService) { }
@HostBinding('@fromLeft')
ngOnInit(): void {
  this.getAllCandidates();
}



addNotGrant() {
  this.msg = 'onMsg';
  this.notGrantService.pushNotGrant(this.notGrant.status,
    this.notGrant.notGrantId)
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
  this.notGrant.notGrantId = null;
  this.notGrant.status = null;
}
// GET CANDIDATES
getAllCandidates(): void {
this.notGrantService.getAllCandidatesList()
.subscribe((allCandidates) => {
  this.allCandidates = allCandidates;
},
(error) => {
});

}



}


