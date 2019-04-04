import { Component, OnInit, TemplateRef, HostBinding } from '@angular/core';
import { ManageTotalDonors } from './manage-donors';
import { ManageDonorService } from './manage-donors.service';
import { Response } from '@angular/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { fromLeft } from '../router.animations';

@Component({
  selector: 'app-manage-donors',
  templateUrl: './manage-donors.component.html',
  styleUrls: ['./manage-donors.component.scss'],
  animations: [fromLeft()]
})
export class ManageDonorsComponent implements OnInit {
  // FOR NGX BOOTSTRAP  MODAL
  public modalRef: BsModalRef;
  // FOR ALL DONORS
getTotalDonors: ManageTotalDonors[];
  constructor(private manageTotalDonorService: ManageDonorService,
     // FOR NGX BOOTSTRAP  MODAL
     private modalService: BsModalService) { }
     @HostBinding('@fromLeft')
      // FOR NGX BOOTSTRAP  MODAL
      public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template); // {3}
       }
  ngOnInit(): void {
  this.getAllDonors();
  }
  getAllDonors(): void {
this.manageTotalDonorService.getAllDonors()
.subscribe((getDonors) => {
  this.getTotalDonors = getDonors;
  console.log(getDonors);
},
(error) => {
  console.log(error);
});
  }

  deleteDonor(id: string) {
    this.manageTotalDonorService.deleteDonor(id)
    .subscribe((response: Response) => {
    this.getAllDonors();
    },
    (error) => {

    });
  }

}
