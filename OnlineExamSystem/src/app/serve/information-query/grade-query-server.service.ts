import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class GradeQueryServerService {

  constructor(private http: HttpClient) {
  }

  getsSchools(callback) {
    return this.http.get('/api/school_all').subscribe(data => callback(data))
  };

  getDepartment(params, callback) {
    this.http.post('/api/school2department', JSON.stringify(params), {

      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      callback(data);
    })
  }
}
