import {Page, NavController} from 'ionic-angular';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {GamePage} from './GamePage';

@Page({
  template:`
    <ion-content>
      <button (click)="drawActionCard()">Vérité!</button>
      <div>{{cardText}}</div>
      <button (click)="check()" [hidden]="hidden == true">Réponds</button>
      <button (click)="check()" [hidden]="hidden == true">Bois</button>
    </ion-content>
  `,
  directives: [IONIC_DIRECTIVES]
})

export class VeritesPage{
  constructor(nav: NavController){
    this.hidden = true;
    this.nav = nav;
    this.types = ['qu\'aimes-tu le moins chez ta moitié/ton ex ?', 'quelle personne trouves-tu la plus sexy ici ?', 'as-tu déjà pissé sous la douche ?', 'de quoi as-tu le plus peur ?', 'as-tu déjà agressé quelqu\'un ?', 't\'es-tu déjà pris un rateau, par qui ?', 'quelle est ta plus grosse VDM ?', 'quel est ton talent caché ?', 'un oiseau t\'a-t-il déjà chié dessus ?', 'quelle est ta série préférée ?', 'à quand remonte ta dernière nuit blanche ?', 'quelle est la chose la plus illégale que tu ais faite ?', 'que ferais-tu si tu changeais de sexe une journée ?', 'qui te soûle en ce moment ?', 'raconte ton dernier rêve', '']
  }

  drawActionCard(){
    this.hidden = false;
    this.cardText = this.types[this.rand(1, this.types.length)];
  }

  rand(min, max) {
    return (Math.floor((max-min)*Math.random())+min);
  }

  check(){
    this.nav.pop();
  }
}
