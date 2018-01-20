import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GradeQueryServerService {

  constructor(private http:HttpClient) { }
  getsSchools(callback) {
    return this.http.get('/api/school_all').subscribe(data => callback(data))
  }
}
