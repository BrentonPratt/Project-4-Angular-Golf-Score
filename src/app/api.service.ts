import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private courseURL = 'https://golf-courses-api.herokuapp.com/courses';
  private courseID = null;
  teeID = null;
  players: Player[];
  numPlayers: number;

  constructor(
    private http: HttpClient,
    ) {
    this.players = [];
  }

  getAPI(){
    return this.http.get(this.courseURL)
  }

  getCourseData(){
    return this.http.get(this.courseURL + "/" + this.courseID);
  }

  setCourseID(courseID){
    this.courseID = courseID;
  }
}
