import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ManageTotalDonors } from './manage-donors';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ManageDonorService {
constructor(private http: Http) {}
getAllDonors(): Observable<ManageTotalDonors[]> {
    return this.http.get('http://localhost:8080/md/getAllDonors')
    .pipe(map((response: Response) => response.json(),
    (error) => {
     catchError(this.errorHandler);
    }));
}
deleteDonor(id: string) {
    return this.http.delete('http://localhost:8080/md/deleteDonors/' + id);
}
private errorHandler(error: Response) {
return Observable.throw(error);
}

}

