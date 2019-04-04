import { Injectable } from '@angular/core';
import { Donors } from './add-me-as-donors';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DonorService {
constructor(private http: Http) {}
addDonors(donors: Donors) {
const body = JSON.stringify(donors);
const headers = new Headers({'Content-Type': 'application/json'});
const options = new RequestOptions({headers: headers});

return this.http.post('http://localhost:8080/donors/addDonors', body, options);

}
}
