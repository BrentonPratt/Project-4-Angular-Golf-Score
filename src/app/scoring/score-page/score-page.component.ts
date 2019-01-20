import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {

getCourseData: any;

  constructor(private courseService: ApiService) { }

  ngOnInit() {
    this.courseService.getCourseData()
      .subscribe(data => {
        data.data.holes.splice(0, 0, {hole: 'Hole #', teeBoxes:[{par: 'Par', hcp: 'HCP', yards: 'Yardage'}]});
        data.data.holes.splice(10,0, {hole: 'Out', teeBoxes: [{par: null, hcp: null, yards: null}]});
        data.data.holes.splice(20,0, {hole: 'In', teeBoxes: [{par: null, hcp: null, yards: null}]},
          {hole: 'Total', teeBoxes: [{par: null, hcp: null, yards: null}]});
        this.getCourseData = data.data.holes;
      console.log(data)})
  }

}
