import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class MajorManageServerService {

  constructor(private http: HttpClient) {
  }

  addMajor(body) {
    return this.http.post('http://localhost:8081/examonline/api/root/major', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteMajor(id) {
    return this.http.delete("http://localhost:8081/examonline/api/root/major/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateMajor(body) {
    return this.http.put('http://localhost:8081/examonline/api/root/major', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //根据学校查询所有部门
  getMajor(param) {
    return this.http.get('http://localhost:8081/examonline/api/root/major', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

  //根据学校查询所有部门
  getMajorFromAdmin(param) {
    return this.http.get('http://localhost:8081/examonline/api/admin/major', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

  addMajorFromAdmin(body) {
    return this.http.post('http://localhost:8081/examonline/api/admin/major', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }
}
