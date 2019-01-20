import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {Course} from '../course';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  selectedCourse: string;
  courses$: Observable<Course[]>;
  teeBoxes: Observable<Course[]>;


  constructor(private courseService: ApiService) { }

  ngOnInit() {
    this.courseService.getAPI()
      .subscribe(data => {
         this.courses$ = data.courses;
          console.log(data)});
  }

  courseData(CourseID){
    this.courseService.setCourseID(CourseID);
    this.courseService.getCourseData()
      .subscribe(data => {
        this.teeBoxes = data.data.holes[0].teeBoxes;
        console.log(data)})
  }

  teeData(TeeID){
    this.courseService.setTeeID(TeeID);
  }

}


/*
export class AppCharacterListComponent implements OnInit, OnChanges, OnDestroy {
  hideDetails = true;
  characters: Observable<Character[]>;
  characterFilter: string = '';

  constructor(private characterService: CharacterService, private router: Router) {
    console.log('constructor called');
  }

  ngOnInit() {
    this.characters = this.characterService
      .getCharacters();
  }
  */
