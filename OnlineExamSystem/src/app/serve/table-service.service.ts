import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class TableServiceService {
  // randomUserUrl = 'https://api.randomuser.me/';
  randomUserUrl = '/api/table';
  constructor(private http: HttpClient) { }
  getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders,url) {
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
    })
  }
}
