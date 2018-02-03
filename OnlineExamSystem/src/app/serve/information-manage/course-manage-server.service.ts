import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class CourseManageServerService {

  constructor(private http: HttpClient) {
  }

  addCourse(body) {
    return this.http.post('http://localhost:8081/examonline/api/admin/subject', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteCourse(id) {
    return this.http.delete("http://localhost:8081/examonline/api/admin/subject/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateCourse(body) {
    return this.http.put('http://localhost:8081/examonline/api/admin/subject', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //查询所有学校管理员
  getCourse(param) {
    return this.http.get('http://localhost:8081/examonline/api/admin/subject', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

  /**
   * 如下为教师对科目进行增删改查
   */

  addCourseFromTeacher(body) {
    return this.http.post('http://localhost:8081/examonline/eo/teacher2/subject', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  deleteCourseFromTeacher(id) {
    return this.http.delete("http://localhost:8081/examonline/eo/teacher2/subject/" + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
    });
  }

  updateCourseFromTeacher(body) {
    return this.http.put('http://localhost:8081/examonline/eo/teacher2/subject', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'),
      withCredentials: true,
    });
  }

  //查询所有学校管理员
  getCourseFromTeacher(param) {
    return this.http.get('http://localhost:8081/examonline/eo/teacher2/subject', {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
      withCredentials: true,
      params: param
    });
  }

}
