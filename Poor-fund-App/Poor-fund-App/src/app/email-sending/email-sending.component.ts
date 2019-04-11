import { Component, OnInit } from '@angular/core';
import { Email } from './email-sending';
import { EmailSendingService } from './email-sending.service';
import { Response } from '@angular/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.scss']
})
export class EmailSendingComponent implements OnInit {
  msg = 'off';
email = new Email();
emails: Email[];
  constructor(private emailService: EmailSendingService) { }

  toFormControl = new FormControl('', [Validators.required]);
  subjectFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);
  fromFormControl = new FormControl('', [Validators.required]);

  biodataForm: FormGroup = new FormGroup({
    to: this.toFormControl,
    subject: this.subjectFormControl,
    message: this.messageFormControl,
    from: this.fromFormControl
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
  alert('Your operation has been completed successfully !!!');
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
