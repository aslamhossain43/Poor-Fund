import { Observable } from 'rxjs';
import { Donors } from '../add-me-as-donors/add-me-as-donors';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class LastYaerTotalDonorService {
constructor(private http: Http) {}
getLastYearTotalDonors(): Observable<Donors[]> {
    return this.http.get('http://localhost:8080/lytd/lastYaerTotalDonors')
    .pipe(map((response: Response) => response.json(),
    (error) => {
        catchError(this.handleError);
    }));
}
public handleError(error: Response) {
    return Observable.throw(error);
}
}
