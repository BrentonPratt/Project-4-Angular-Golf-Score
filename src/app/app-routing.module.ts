import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ScorePageComponent} from './scoring/score-page/score-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: WelcomePageComponent
  },
  {
    path: 'scores',
    component: ScorePageComponent
  },
  {
    path: '**',
    component: WelcomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
