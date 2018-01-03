import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class LoginServeService {

  constructor(private http: HttpClient) { }
  login( params, callback ) {
    this.http.post('/api', params, {

      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe( data => {
      callback(data);
    })
  }
}
