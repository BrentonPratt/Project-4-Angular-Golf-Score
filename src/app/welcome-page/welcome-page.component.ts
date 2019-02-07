import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {Course} from '../course';
import {Player} from '../player';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  numPlayers: number;
  selectedCourse: string;
  selectedTee: any;
  courses$: Observable<Course[]>;
  teeBoxes: Observable<Course[]>;


  constructor(private courseService: ApiService) {
  }

  ngOnInit() {
    this.courseService.getAPI()
      .subscribe(data => {
         this.courses$ = data.courses;
      });
  }

  courseData(CourseID){
    this.courseService.setCourseID(CourseID);
    this.courseService.getCourseData()
      .subscribe(data => {
        this.teeBoxes = data.data.holes[0].teeBoxes;
      })
  }

  teeData(TeeID){
    this.courseService.teeID = TeeID;
  }

  getNumPlayers(){
    this.courseService.numPlayers = this.numPlayers;
    for (this.numPlayers; this.courseService.players.length < this.numPlayers;) {
      this.courseService.players.push({name: '', score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
    }
  }
}

/*for (this.numPlayers; this.playService.players.length < this.numPlayers;) {
      this.playService.players.push({name: "", score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]})
    }*/
