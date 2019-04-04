import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LastYearNotGrantedList } from './last-year-not-granted-list';
@Injectable()
export class LastYearNotGrantedListService {

    constructor(private http: Http) { }

    getLastYearNotGrantedList(): Observable<LastYearNotGrantedList[]> {
        return this.http.get('http://localhost:8080/lycl/lastYearCandidateList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}

