import { Component, OnInit, HostBinding, TemplateRef } from '@angular/core';
import { UploadFileService } from './consumers.upload.service';
import { Consumers } from './consumers';
import { ConsumerService } from './consumers.consumer-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Response } from '@angular/http';
import { from } from 'rxjs';
import { fromRight } from '../router.animations';




@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [fromRight()]
})
export class ConsumersComponent implements OnInit {
  // FOR NULL
  nullValue = null;
  // AUTH ID
  uid: string;
   // FOR NGX BOOTSTRAP  MODAL
   public modalRef: BsModalRef;
  // FOR MESSGAE
  msg = 'offPrpgressBar';
  // FOR CONSUMERS
  consumers: Consumers[];
  consumer = new Consumers();
  // FOR FILE
  selectedpiFiles: FileList;
  currentpiFileUpload: File;
  selectedapiFiles: FileList;
  currentapiFileUpload: File;
  // FOR NG MATERIAL

  // FOR FORM FIELD
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  countryFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  zelaFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  upozelaFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  unionFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  workFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  contactFormControl = new FormControl('', [Validators.required]);
  bkashFormControl = new FormControl('', [Validators.required]);
  selectedPiFileControl = new FormControl('', [Validators.required]);
  selectedApiFileControl = new FormControl('', [Validators.required]);
  // FOR CONSTRUCTOR
  constructor(private af: AngularFireAuth , private uploadService: UploadFileService,
    private consumerService: ConsumerService,
      // FOR NGX BOOTSTRAP  MODAL
      private modalService: BsModalService) {
     this.af.authState.subscribe(authentication => {
     this.consumer.uid = authentication.uid;
     this.uid = authentication.uid;
     console.log(this.consumer.uid);
     });
    }

  biodataForm: FormGroup = new FormGroup({
    name: this.nameFormControl,
    country: this.countryFormControl,
    zela: this.zelaFormControl,
    upozela: this.upozelaFormControl,
    union: this.unionFormControl,
    work: this.workFormControl,
    contact: this.contactFormControl,
    bkash: this.bkashFormControl,
    // FOR RESET PURPOSE ONLU
    selectedPiFile: this.selectedPiFileControl,
    selectedApiFile: this.selectedApiFileControl
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

  getRequiredErrorMessageForNumber(field) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter valid ' + field + ' number' : '';
  }
  // FOR BINDING ANIMATION
  @HostBinding('@fromRight')
  // NG LIFE CYCLE
  ngOnInit(): void {
this.getConsumers();
  }

 // FOR NGX BOOTSTRAP  MODAL
 public openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template); // {3}
 }
  // FOR FILE UPLOAD
  selectpiFile(event) {
    this.selectedpiFiles = event.target.files;
  }
  selectapiFile(event) {
    this.selectedapiFiles = event.target.files;
  }

// GET CUURENT YEAR CONSUMERS
getConsumers(): void {
  this.consumerService.getCurrentYearAllConsumers()
  .subscribe((currentYearAllConsumers) => {
    this.consumers = currentYearAllConsumers;
    console.log(this.consumers);
  });
}



  uploadFile() {
    this.msg = '';
    this.currentpiFileUpload = this.selectedpiFiles.item(0);
    this.currentapiFileUpload = this.selectedapiFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentpiFileUpload, this.currentapiFileUpload)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          this.addConsumers();
        }
      },
        (error) => {
          console.log(error.statusText);
          // YOU MUST NOT CHANGE THIS FORMAT
          alert('Your operation is failed ! please select valid image .');
          this.msg = 'offProgressBar';
          this.reset();
        }
      );
  }

  // FOR CONSUMERS
  // ADD CONSUMERS
  addConsumers(): void {
    this.consumerService.addConsumers(this.consumer)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          alert('Your operation has been completed successfully !');
          this.reset();
          this.msg = 'offProgressBar';
        }
      },
        (error) => {
        });
  }

  reset() {
    this.consumer.name = null;
    this.consumer.country = null;
    this.consumer.zela = null;
    this.consumer.upozela = null;
    this.consumer.union = null;
    this.consumer.work = null;
    this.consumer.contact = null;
    this.consumer.bkash = null;
    this.consumer.selectedPiFile = null;
    this.consumer.selectedApiFile = null;
  }
  deleteCandidate(id: string) {
    this.consumerService.deleteCandidate(id)
    .subscribe((response: Response) => {
      this.getConsumers();
    },
    (error) => {
  });

}
getCandidateById(id: string): void {
  this.consumerService.getCandidateById(id)
  .subscribe((candidateById) => {
    this.consumer = candidateById;
  });
}

}
