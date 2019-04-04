import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AllCandidates } from './manage-granted-list.candidates';

@Injectable()
export class ManageGrantedService {
constructor(private http: Http) {}
pushGrantFiles(selectedProvedFile: File, status: string, grantId: string) {
const formData: FormData = new FormData();
formData.append('provedFile', selectedProvedFile);
formData.append('grantId', grantId);
formData.append('status', status);
return this.http.post('http://localhost:8080/mg/addGrant', formData);

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
