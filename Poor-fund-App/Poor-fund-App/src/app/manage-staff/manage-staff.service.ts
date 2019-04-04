import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Staff } from './manage-staff';

@Injectable()
export class ManageStaffService {
    constructor(private http: Http) {}
    pushStaffFiles(sfile: File, name: string, job: string, details: string, id: string, createdDate) {

const formData: FormData = new FormData();

formData.append('sfile', sfile);
formData.append('name', name);
formData.append('job', job);
formData.append('details', details);

formData.append('id', id);

formData.append('createdDate', createdDate);
    return this.http.post('http://localhost:8080/staff/addStaff', formData);
}


getStaff(): Observable<Staff[]> {
return this.http.get('http://localhost:8080/staff/getStaff')
.pipe(map((response: Response) => response.json()),
catchError(this.handleError));
}
getStaffById(id: string): Observable<Staff> {
    return this.http.get('http://localhost:8080/staff/getStaffById/' + id)
    .pipe(map((response: Response) => response.json()),
    catchError(this.handleError));
    }
deleteStaff(id: string) {
    return this.http.delete('http://localhost:8080/staff/deleteStaff/' + id);
}
private handleError(error: Response) {
    return Observable.throw(error);
}

}

