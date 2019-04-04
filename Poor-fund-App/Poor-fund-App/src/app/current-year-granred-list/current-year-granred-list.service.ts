import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CurrentYearGrantedList } from './current-year-granred-list';

@Injectable()
export class CurrentYearGrantedListService {

    constructor(private http: Http) { }

    getCurrentYearGrantedList(): Observable<CurrentYearGrantedList[]> {
        return this.http.get('http://localhost:8080/cycl/currentYearCandidateList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}
