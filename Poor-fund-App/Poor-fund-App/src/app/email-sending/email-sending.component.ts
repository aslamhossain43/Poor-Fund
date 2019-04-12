import { Component, OnInit, HostBinding } from '@angular/core';
import { Email } from './email-sending';
import { EmailSendingService } from './email-sending.service';
import { Response } from '@angular/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { fromBottom } from '../router.animations';

@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.scss'],
  animations: [fromBottom()]
})
export class EmailSendingComponent implements OnInit {
  msg = 'off';
email = new Email();
emails: Email[];
  constructor(private emailService: EmailSendingService) { }
  @HostBinding('@fromBottom')

  toFormControl = new FormControl('', [Validators.required]);
  subjectFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);
  
  biodataForm: FormGroup = new FormGroup({
    to: this.toFormControl,
    subject: this.subjectFormControl,
    message: this.messageFormControl
  });


// FOR STRING VALIDATION
getRequiredErrorMessageForString(field) {
  if (this.biodataForm.get(field).hasError('required')) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
  }

}



  ngOnInit() {
  }


sendingEmail():void{
  this.msg = '';
this.emailService.sendingEmail(this.email)
.subscribe((response: Response)=>{
  alert('Email has been sent!!!');
  this.msg = 'offMsg';
},
(error) => {
  alert('Fail your operation !!!');
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
