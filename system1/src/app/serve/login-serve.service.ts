import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class LoginServeService {

  constructor(private http: HttpClient) { }
  login( params, callback ) {
    this.http.post('url', JSON.stringify(params)).subscribe( data => {
      callback(data);
    })
  }
}
