import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotGrantedList } from './not-granted-list';
@Injectable()
export class NotGrantedListService {

    constructor(private http: Http) { }

    getNotGrantedList(): Observable<NotGrantedList[]> {
        return this.http.get('http://localhost:8080/gl/getAllList')
            .pipe(map((response: Response) => response.json()),
                catchError(this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}
