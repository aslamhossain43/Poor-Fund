import { Component, OnInit, HostBinding } from '@angular/core';
import { fromLeft } from '../router.animations';

@Component({
  selector: 'app-granting-information',
  templateUrl: './granting-information.component.html',
  styleUrls: ['./granting-information.component.scss'],
  animations: [fromLeft()]
})
export class GrantingInformationComponent implements OnInit {

  constructor() { }
@HostBinding('@fromLeft')
  ngOnInit() {
  }
}
