import { Component, OnInit, HostBinding } from '@angular/core';
import { fromLeft } from '../router.animations';

@Component({
  selector: 'app-main-purpose',
  templateUrl: './main-purpose.component.html',
  styleUrls: ['./main-purpose.component.scss'],
  animations: [fromLeft()]
})
export class MainPurposeComponent implements OnInit {

  constructor() { }
@HostBinding('@fromLeft')
  ngOnInit() {
  }

}
