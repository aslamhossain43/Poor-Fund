import { Component, OnInit, HostBinding } from '@angular/core';
import { fromRight } from '../router.animations';

@Component({
  selector: 'app-donors-granting-information',
  templateUrl: './donors-granting-information.component.html',
  styleUrls: ['./donors-granting-information.component.scss'],
  animations: [fromRight()]
})
export class DonorsGrantingInformationComponent implements OnInit {

  constructor() { }
@HostBinding('@fromRight')
  ngOnInit() {
  }

}
