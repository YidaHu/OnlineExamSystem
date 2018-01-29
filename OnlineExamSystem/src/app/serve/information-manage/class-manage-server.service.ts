import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ClassManageServerService {

  constructor(private http: HttpClient) {
  }

  addClass(body) {
    return this.http.post('http://localhost:8081/examonline/api/admin/class', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteClass(id) {
    return this.http.delete("http://localhost:8081/examonline/api/admin/class/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateClass(body) {
    return this.http.put('http://localhost:8081/examonline/api/admin/class', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //根据学校查询所有部门
  getClass(param) {
    return this.http.get('http://localhost:8081/examonline/api/admin/class', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
