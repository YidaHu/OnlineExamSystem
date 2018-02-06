import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class TitleManageServerService {

  constructor(private http: HttpClient) {
  }

  addTitle(body) {
    return this.http.post('http://localhost:8081/examonline/api/teacher/question', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteTitle(id) {
    return this.http.delete("http://localhost:8081/examonline/api/teacher/question/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateTitle(body) {
    return this.http.put('http://localhost:8081/examonline/api/teacher/question', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  getTitle(param) {
    return this.http.get('http://localhost:8081/examonline/api/teacher/question', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
