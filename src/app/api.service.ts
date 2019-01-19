import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Course} from './course';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private courseURL = 'https://golf-courses-api.herokuapp.com/courses';
  data: any = {};

  constructor(private http: HttpClient) {
  }

  getAPI(){
    return this.http.get(this.courseURL)
  }

  getCourses(){
    this.getAPI().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
