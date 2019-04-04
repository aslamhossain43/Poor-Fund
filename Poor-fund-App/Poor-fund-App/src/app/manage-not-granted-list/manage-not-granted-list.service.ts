import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AllCandidates } from './manage-not-granted-list.candidates';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ManageNotGrantedListService {
constructor(private http: Http) {}
pushNotGrant(status: string, notGrantId: string) {
const formData: FormData = new FormData();
formData.append('notGrantId', notGrantId);
formData.append('status', status);
return this.http.post('http://localhost:8080/mng/addNotGrant', formData);

}



getAllCandidatesList(): Observable<AllCandidates[]> {
    return this.http.get('http://localhost:8080/gl/getAllList')
        .pipe(map((response: Response) => response.json()),
            catchError(this.handleError));
}
private handleError(error: Response) {
    return Observable.throw(error);
}
}
