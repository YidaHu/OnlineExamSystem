import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ExamPageServiceService {

  constructor(private http: HttpClient) {
  }

  //提交考试答案
  submitExamAnswer(id, body) {
    return this.http.post('http://localhost:8081/examonline/api/student/exam/' + id, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

}
