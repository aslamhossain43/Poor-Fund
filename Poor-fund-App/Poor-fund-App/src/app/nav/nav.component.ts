import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  uidDataBase = 'bHVaZBMwjqg4UO6RtfQ9rj8RLXK2';
  emailuid0043 = '9Yqsz4wHXeTEQaU3RTV2ZjpYQMm2';
  uid: string;
  authenticatedName: any;
  photoUrl: string;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.loginProperties();

  }

  loginProperties() {
    this.af.authState.subscribe(auth => {
      if (auth !== null) {
        if (!auth.displayName) {
          this.authenticatedName = auth.email;
        } else {
          this.authenticatedName = auth.displayName;
        }
        this.photoUrl = auth.photoURL;
        this.uid = auth.uid;
        console.log('uid: ' + auth.uid);
      }
    });
  }



  // FOR NAV COLLAPSE
  isCollapsed = true;
  // LOGOUT
  logout() {
    this.af.auth.signOut();
    this.authenticatedName = null;
    this.photoUrl = null;
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }



}





