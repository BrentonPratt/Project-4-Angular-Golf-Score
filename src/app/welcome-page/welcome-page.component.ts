import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private courseService: ApiService) { }

  ngOnInit() {
    this.courseService.getCourses();
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
