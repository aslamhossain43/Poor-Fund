import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Staff } from '../manage-staff/manage-staff';

@Injectable()
export class StaffDirectoryService {
constructor(private http: Http) {}

getStaff(): Observable<Staff[]> {
return this.http.get('http://localhost:8080/staff/getStaff')
.pipe(map((response: Response) => response.json()),
catchError(this.handleError));
}
private handleError(error: Response) {
    return Observable.throw(error);
}

}
