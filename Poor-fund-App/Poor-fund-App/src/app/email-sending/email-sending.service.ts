import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Email } from "./email-sending";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class EmailSendingService {

constructor(private http: Http) {}

sendingEmail(email: Email) {
    const body = JSON.stringify(email);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post('/emailSending', body, options);
   
}


getEmails(): Observable<Email[]> {
return this.http.get('http://localhost:8081/gettingEmails')
.pipe(map((response: Response) => response.json()),
catchError(this.handlError));
}
deleteEmail(id: string) {
return this.http.delete('/deleteById/' + id);
}

public handlError(error: Response) {
return Observable.throw(error);
}





}