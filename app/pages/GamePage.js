import {Page, NavController} from 'ionic-angular';
import {ActionsOuVerites} from './ActionsOuVerites';
import {ActionsPage} from './ActionsPage';
import {VeritesPage} from './VeritesPage';
import {Glasses} from './Glasses';

@Page({
  template:`
    <ion-content>
      <actionsOuVerites (coinFlip)="onClick($event)"></actionsOuVerites>
      <glasses></glasses>
    </ion-content>
  `,
  directives:[ActionsOuVerites, Glasses]
})

export class GamePage{

  constructor(nav: NavController){
    this.nav = nav;
  }

  onClick(event) {
    if(event == 'action'){
      this.nav.push(ActionsPage)
    }else{
      this.nav.push(VeritesPage);
    }
  }
}
