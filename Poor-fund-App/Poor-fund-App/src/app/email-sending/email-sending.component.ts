import { Component, OnInit } from '@angular/core';
import { Email } from './email-sending';
import { EmailSendingService } from './email-sending.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.scss']
})
export class EmailSendingComponent implements OnInit {
email = new Email();
emails: Email[];
  constructor(private emailService: EmailSendingService) { }

  ngOnInit() {
  }


sendingEmail():void{
this.emailService.sendingEmail(this.email)
.subscribe((response: Response)=>{

},
(error) => {

});



}

gettingEmails():void{
this.emailService.getEmails()
.subscribe(email=>{
  this.emails=email;
});


}

deleteEmail(id:string){
this.emailService.deleteEmail(id)
.subscribe(res=>Response=>{

},
(error)=>{

});

}








}
