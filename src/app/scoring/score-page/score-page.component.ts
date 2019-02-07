import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Player} from '../../player';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {

  teeID;
  holes$: any;
  numPlayers: number;
  getCourseData: any;
  private players: Player[];
  totalYards: number = 0;
  totalPar: number = 0;
  totalHcp: number = 0;

  constructor(private courseService: ApiService) {
    this.courseTotals();
    this.teeID = this.courseService.teeID;
  }

  ngOnInit() {
    this.players = this.courseService.players;
    this.numPlayers = this.courseService.numPlayers;
    this.courseService.getCourseData()
      .subscribe(data => {
        data.data.holes.splice(10,0, {hole: 'Out', teeBoxes: [{par: null, hcp: null, yards: null}]});
        /*data.data.holes.splice(20,0, {hole: 'In', teeBoxes: [{par: null, hcp: null, yards: null}]},
          {hole: 'Total', teeBoxes: [{par: this.totalPar, hcp: this.totalHcp, yards: this.totalYards}]});*/
        this.getCourseData = data.data.holes;
      });
    console.log(this.players);
  }

  async courseTotals(){
    await this.courseService.getCourseData().subscribe(data => {
      this.holes$ = data.data.holes;
      for (let i = 0; i < 18; i++) {
        this.totalYards += parseInt(this.holes$[i].teeBoxes[this.teeID].yards,10);
        this.totalPar += parseInt(this.holes$[i].teeBoxes[this.teeID].par,10);
        this.totalHcp += parseInt(this.holes$[i].teeBoxes[this.teeID].hcp,10);
      }
    })
  }
}
