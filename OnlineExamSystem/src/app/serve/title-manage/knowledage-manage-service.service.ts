import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class KnowledageManageServiceService {

  constructor(private http: HttpClient) {
  }

  addKnowledage(body) {
    return this.http.post('http://localhost:8081/examonline/api/teacher/knowledge', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteKnowledage(id) {
    return this.http.delete("http://localhost:8081/examonline/api/teacher/knowledge/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateKnowledage(body) {
    return this.http.put('http://localhost:8081/examonline/api/teacher/knowledge', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  getKnowledage(param) {
    return this.http.get('http://localhost:8081/examonline/api/teacher/knowledge', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
