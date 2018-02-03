import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class TeacherManageServerService {

  constructor(private http: HttpClient) {
  }

  addTeacher(body) {
    return this.http.post('http://localhost:8081/examonline/api/admin/user/addteacher', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteTeacher(param) {
    return this.http.delete('http://localhost:8081/examonline/api/admin/user/deleteteacher', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

  updateTeacher(body) {
    return this.http.put('http://localhost:8081/examonline/api/admin/user/updateteacher', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //查询所有学校管理员
  getTeacher(param) {
    return this.http.get('http://localhost:8081/examonline/api/admin/user/listteacher', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
