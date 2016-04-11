import {Page, NavController} from 'ionic-angular';
import {GamePage} from './GamePage';
import {ActionsPage} from './ActionsPage';
import {VeritesPage} from './VeritesPage';

@Page({
  template:`
  <ion-content>
      <h1>Action ou vérité?..</h1>
      <button (click)="launchGame()">Commencer</button>
  </ion-content>
  `
})

export class HomePage{

  constructor(nav:NavController){
    this.nav = nav;
  }
  launchGame(){
    this.nav.push(GamePage);
  }
  goToActionPage(){
    this.nav.push(ActionsPage);
  }
  goToTruthPage(){
    this.nav.push(VeritesPage);
  }
}
