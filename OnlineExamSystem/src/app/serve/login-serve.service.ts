import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class LoginServeService {

  constructor(private http: HttpClient) {
  }

  login(params, callback) {
    // console.log(JSON.stringify(params))
    this.http.post('http://localhost:8081/examonline/login', params, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
      withCredentials: true,
    }).subscribe(data => {
      callback(data);
    })
  }
}
