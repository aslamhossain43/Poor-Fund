import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CurrentYearNotGrantedList } from './current-year-not-granted-list';
@Injectable()
export class CurrentYearNotGrantedListService {

    constructor(private http: Http) { }

    getCurrentYearNotGrantedList(): Observable<CurrentYearNotGrantedList[]> {
        return this.http.get('http://localhost:8080/cycl/currentYearCandidateList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}

