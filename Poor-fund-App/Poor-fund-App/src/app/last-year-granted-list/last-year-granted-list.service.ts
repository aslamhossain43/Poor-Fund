import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { LastYearGrantedList } from './last-year-granted-list';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LastYearGrantedListService {

    constructor(private http: Http) { }

    getLastYearGrantedList(): Observable<LastYearGrantedList[]> {
        return this.http.get('http://localhost:8080/lycl/lastYearCandidateList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}