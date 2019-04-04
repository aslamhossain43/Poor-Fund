import { Component, OnInit, HostBinding } from '@angular/core';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-history-of-bangladesh',
  templateUrl: './history-of-bangladesh.component.html',
  styleUrls: ['./history-of-bangladesh.component.scss'],
  animations: [fromBottom()]
})
export class HistoryOfBangladeshComponent implements OnInit {

  constructor() { }
@HostBinding('@fromBottom')
  ngOnInit() {
  }

}
