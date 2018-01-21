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

  getAdmin(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders, url) {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', sortField)
      .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    // return this.http.post(`${this.randomUserUrl}`, {
    return this.http.post(`${url}`, {
      params: params
    });
  }


}
