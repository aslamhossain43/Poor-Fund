import { Component, OnInit, HostBinding } from '@angular/core';
import { fromRight } from '../router.animations';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
  animations: [fromRight()]
})
export class DevelopersComponent implements OnInit {

  constructor() { }
@HostBinding('@fromRight')
  ngOnInit() {
  }

}
