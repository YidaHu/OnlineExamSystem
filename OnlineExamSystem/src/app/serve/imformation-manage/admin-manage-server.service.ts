import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class AdminManageServerService {

  constructor(private http: HttpClient) {
  }

  addAdmin(params, callback) {
    this.http.post('/examonline/api/root/user/addrooter', JSON.stringify(params), {

      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      callback(data);
    })
  }

  // getAdmin(callback) {
  //   return this.http.get('/examonline/api/root/user/listrooter', JSON.stringify(params), {
  //
  //     headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //   }).subscribe(data => callback(data))
  // };

  getAdmin(param, sortField, sortOrder, genders, url) {

    return this.http.get(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params:param
    });


  }

  // getAdmin(params, callback) {
  //   this.http.get('http://localhost:8081/examonline/api/root/user/listrooter', params, {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
  //   }).subscribe(data => {
  //     callback(data);
  //   })
  // }


}
