import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ManageAllCandidates } from './manage-candidates';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ManageCandidatesService {
constructor(private http: Http) {}


getAllCandidatesForManage(): Observable<ManageAllCandidates[]> {
    return this.http.get('http://localhost:8080/mc/getAllCandidates')
        .pipe(map((response: Response) => response.json()),
            catchError(this.handleError));
}
deleteCandidates(candidateId: string) {
    return this.http.delete('http://localhost:8080/mc/deleteCandidate/' + candidateId);
}

private handleError(error: Response) {
    return Observable.throw(error);
}


}
