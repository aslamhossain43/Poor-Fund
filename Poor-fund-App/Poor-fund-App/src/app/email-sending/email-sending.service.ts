import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Email } from "./email-sending";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from "rxjs/operators";

@Injectable()
export class EmailSendingService {

  constructor(private httpClient: HttpClient) { }

  sendingEmail(email: Email){
          if (email.id) {
            return this.httpClient.put(`http://localhost:8081/updateEmail/${email.id}`, email);
            
          } else {
            
            return this.httpClient.post(`http://localhost:8081/emailSending`, email)
            .pipe(catchError(this.handleError))
          }

  }


  getEmails(){
    return this.httpClient.get<Email[]>(`http://localhost:8081/gettingEmails`);
  }

  getEmail(id: string){
    return this.httpClient.get<Email>(`http://localhost:8081/gettingEmail/${id}`);
  }

  deleteEmail(id: string){
    return this.httpClient.delete(`http://localhost:8081/deleteById/${id}`);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}