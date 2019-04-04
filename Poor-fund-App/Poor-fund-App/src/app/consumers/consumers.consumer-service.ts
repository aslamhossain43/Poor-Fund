import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Consumers } from './consumers';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class ConsumerService {

    constructor(private http: Http) { }

    addConsumers(consumers: Consumers) {
        const body = JSON.stringify(consumers);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (consumers.id) {
            return this.http.put('http://localhost:8080/consumers/updateConsumers/' + consumers.id, body, options);
        } else {
            return this.http.post('http://localhost:8080/consumers/addConsumers', body, options);
        }
    }


getCurrentYearAllConsumers(): Observable<Consumers[]> {
return this.http.get('http://localhost:8080/consumers/getConsumers')
.pipe(map((response: Response) => response.json()),
catchError(this.handlError));
}
deleteCandidate(id: string) {
return this.http.delete('http://localhost:8080/consumers/deleteCandidate/' + id);
}

getCandidateById(id: string): Observable<Consumers> {
    return this.http.get('http://localhost:8080/consumers/candidateById/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)
    ));
}

public handlError(error: Response) {
    return Observable.throw(error);
}






}

