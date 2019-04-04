import { Component, OnInit, HostBinding } from '@angular/core';
import { fromBottom } from '../router.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 animations: [fromBottom ()]
})
export class HomeComponent implements OnInit {

  constructor() {}
@HostBinding('@fromBottom')
  ngOnInit() {
  }

}
