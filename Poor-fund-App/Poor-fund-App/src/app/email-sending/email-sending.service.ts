import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmailSendingService {

  constructor(private httpClient: HttpClient) { }

  sendingEmail(email: Object): Observable<Object> {

    return this.httpClient.post('http://localhost:8081/emailSending', email);

  }


  getEmails(): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/gettingEmails`);
  }

  getEmail(id:string): Observable<any> {
    return this.httpClient.get(`http://localhost:8081/gettingEmail/${id}`);
  }

  deleteEmail(id: string): Observable<any> {
    return this.httpClient.delete('http://localhost:8081/deleteById/' + id);
  }




}