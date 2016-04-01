import {Page} from 'ionic-angular';
import {Actions} from './Actions';
import {Verites} from './Verites';
import {ActionsOuVerites} from './ActionsOuVerites';

@Page({
  template:`
    <ion-content>
      <h1>ça c'est le jeu:</h1>
      <actionsOuVerites (coinFlip)="onClick($event)"></actionsOuVerites>
        <verites [hidden]="result == 'action'||''"></verites>
        <actions [hidden] = "result== 'verite'||''"></actions>
    </ion-content>
  `,
  directives:[Actions,Verites,ActionsOuVerites]
})

export class GamePage{

  onClick(event) {
    this.result = event;
  }
}
