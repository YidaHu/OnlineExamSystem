import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class StudentManageServerService {

  constructor(private http:HttpClient) { }

  addStudent(body) {
    return this.http.post('http://localhost:8081/examonline/api/admin/user/addstudent', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteStudent(param) {
    return this.http.delete('http://localhost:8081/examonline/api/admin/user/deletestudent', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

  updateStudent(body) {
    return this.http.put('http://localhost:8081/examonline/api/admin/user/updatestudent', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //查询所有学校管理员
  getStudent(param) {
    return this.http.get('http://localhost:8081/examonline/api/admin/user/liststudent', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
