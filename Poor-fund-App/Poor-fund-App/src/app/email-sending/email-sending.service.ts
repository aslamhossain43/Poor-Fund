import { Injectable } from "@angular/core";
import {throwError, Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Email } from "./email-sending";
import { catchError } from "rxjs/operators";

@Injectable()
export class EmailSendingService {

  constructor(private httpClient: HttpClient) { }
//---------------------------------------------------------------------------------------
  sendingEmail(email: Email){
    
          if (email.id) {
            return this.httpClient.put(`http://localhost:8081/updateEmail/${email.id}`, email)
            .pipe(catchError(this.handleError));
            
          } else {
            
            return this.httpClient.post(`http://localhost:8081/emailSending`, email)
            .pipe(catchError(this.handleError));
          }

  }
//-------------------------------------------------------------------------------------

  getEmails(){
    return this.httpClient.get<Email[]>(`http://localhost:8081/gettingEmails`);
  }
//-------------------------------------------------------------------------------------

  getEmail(id: string){
    return this.httpClient.get<Email>(`http://localhost:8081/gettingEmail/${id}`);
  }
//-------------------------------------------------------------------------------------

  deleteEmail(id: string){
    return this.httpClient.delete(`http://localhost:8081/deleteById/${id}`);
  }
//-------------------------------------------------------------------------------------

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error);
  };

}