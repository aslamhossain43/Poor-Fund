import { Component, OnInit, HostBinding } from '@angular/core';
//  import { viewCandidatesMoveIn } from '../router.animations';

@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.scss'],
  // animations: [viewCandidatesMoveIn()]
})
export class ViewCandidatesComponent implements OnInit {

  constructor() { }
// FOR VIEW CANDIDATES BINDING
// @HostBinding('@viewCandidatesMoveIn')
  ngOnInit() {
  }

}
