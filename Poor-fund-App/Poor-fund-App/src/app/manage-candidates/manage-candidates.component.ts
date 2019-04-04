import { Component, OnInit, TemplateRef, HostBinding } from '@angular/core';
import { ManageAllCandidates } from './manage-candidates';
import { ManageCandidatesService } from './manage-candidates.service';
import { Response } from '@angular/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { fromRight } from '../router.animations';

@Component({
  selector: 'app-manage-candidates',
  templateUrl: './manage-candidates.component.html',
  styleUrls: ['./manage-candidates.component.scss'],
  animations: [fromRight()]
})
export class ManageCandidatesComponent implements OnInit {
  // FOR NGX BOOTSTRAP  MODAL
   public modalRef: BsModalRef;
   // FOR ALL CANDIDATES
  allCandidates: ManageAllCandidates[];

  constructor(private manageCandidateService: ManageCandidatesService,
    // FOR NGX BOOTSTRAP  MODAL
    private modalService: BsModalService ) { }
    @HostBinding('@fromRight')
    // FOR NG LIFE CYCLE
    ngOnInit(): void {
      this.getAllCandidates();
    }
    // FOR NGX BOOTSTRAP  MODAL
          public openModal(template: TemplateRef<any>) {
            this.modalRef = this.modalService.show(template); // {3}
           }

  getAllCandidates() {
    this.manageCandidateService.getAllCandidatesForManage()
    .subscribe((allCandidates) => {
this.allCandidates = allCandidates;
    });
  }
  deleteCandidate(id: string) {
    this.manageCandidateService.deleteCandidates(id)
    .subscribe((response: Response) => {
      this.getAllCandidates();
  console.log(response);
    },
    (error) => {
console.log(error);
    });
  }
}
