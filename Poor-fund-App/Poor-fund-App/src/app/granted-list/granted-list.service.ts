import { Http, Response } from '@angular/http';
import { GrantedList } from './granted-list';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class GrantedListService {

    constructor(private http: Http) { }

    getGrantedList(): Observable<GrantedList[]> {
        return this.http.get('http://localhost:8080/gl/getAllList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}
