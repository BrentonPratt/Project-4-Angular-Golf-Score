import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private courseURL = 'https://golf-courses-api.herokuapp.com/courses';
  private courseID = null;
  private teeID = null;

  constructor(
    private http: HttpClient,
    ) {}

  getAPI(){
    return this.http.get(this.courseURL)
  }

  getCourseData(){
    return this.http.get(this.courseURL + "/" + this.courseID);
  }

  setCourseID(courseID){
    this.courseID = courseID;
  }

  setTeeID(teeID){
    this.teeID = teeID;
  }
}
