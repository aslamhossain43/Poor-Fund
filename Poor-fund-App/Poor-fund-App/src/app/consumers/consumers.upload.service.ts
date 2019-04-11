import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UploadFileService {
  constructor(private http: Http) { }
  pushFileToStorage(piFile: File, apiFile: File) {
    const formdata: FormData = new FormData();
    formdata.append('piFile', piFile);
    formdata.append('apiFile', apiFile);
     return this.http.post('/consumers/addFile', formdata);
  }

}

