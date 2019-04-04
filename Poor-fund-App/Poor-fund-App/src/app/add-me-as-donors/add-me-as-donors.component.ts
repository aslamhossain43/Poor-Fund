import { Component, OnInit, HostBinding } from '@angular/core';
import { Donors } from './add-me-as-donors';
import { DonorService } from './add-me-as-donors.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-add-me-as-donors',
  templateUrl: './add-me-as-donors.component.html',
  styleUrls: ['./add-me-as-donors.component.scss'],
  animations: [fromBottom()]
})
export class AddMeAsDonorsComponent implements OnInit {
  // MAT PROGRESS BAR
  msg = 'offMsg';
donors: Donors[];
donor = new Donors();
// FOR VALIDATION
nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  countryFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  cityFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  contactFormControl = new FormControl('', [Validators.required]);

  biodataForm: FormGroup = new FormGroup({
    donorsName: this.nameFormControl,
    country: this.countryFormControl,
    city: this.cityFormControl,
    contact: this.contactFormControl,
  });

  // FOR STRING VALIDATION
  getRequiredErrorMessageForString(field) {
    if (this.biodataForm.get(field).hasError('required')) {
      return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
    } else if (this.biodataForm.get(field).hasError('minlength')) {
      return this.biodataForm.get(field).hasError('minlength') ? 'You must enter ' + field + ' minimum 3 characters' : '';
    } else if (this.biodataForm.get(field).hasError('maxlength')) {
      return this.biodataForm.get(field).hasError('maxlength') ? 'You must enter ' + field + ' maximum 30 characters' : '';
    } else {
      return this.biodataForm.get(field).hasError('type') ? 'You must enter valid ' + field : '';
    }

  }

  constructor(private donorService: DonorService) { }
@HostBinding('@fromBottom')
  ngOnInit() {
  }
addDonors() {
  this.msg = '';
this.donorService.addDonors(this.donor)
.subscribe((response) => {
if (response.statusText === 'OK') {
  alert('Your operation has been completed successfully !!!');
  this.msg = 'offMsg';
  this.reset();
}
},
(error) => {
  alert('Fail your operation !!!');
  this.reset();
});
}

reset() {
this.donor.donorsName = null;
this.donor.country = null;
this.donor.city = null;
this.donor.contact = null;
}


}

