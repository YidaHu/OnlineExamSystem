import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class InsertExamService {

  constructor(private http: HttpClient) {
  }

  //考试安排
  insertExam(body) {
    return this.http.post('http://localhost:8081/examonline/api/teacher/exam', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //获得考试
  getExam(param) {
    return this.http.get('http://localhost:8081/examonline/api/teacher/exam', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
