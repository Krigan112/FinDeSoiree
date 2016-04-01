import {Page, NavController} from 'ionic-angular';
import {IONIC_DIRECTIVES} from 'ionic-angular';


@Page({
  template:`
    <button (click)="drawActionCard()" [hidden]="hidden == true">Vérité!</button>
    <div>{{cardText}}</div>
  `,
  directives: [IONIC_DIRECTIVES]
})

export class Actions{
  constructor(){
    this.hidden = false;
    this.types = ['qu\'aimes-tu le moins chez ta moitié/ton ex', 'quelle personne trouves-tu la plus sexy ici', 'as-tu déjà pissé sous la douche', 'de quoi as-tu le plus peur', 'as-tu déjà agressé quelqu\'un', 't\'es-tu déjà pris un rateau, par qui', 'quelle est ta plus grosse VDM', 'quel est ton talent caché', 'un oiseau t\'a-t-il déjà chié dessus', 'quelle est ta série préférée', 'a quand remonte ta dernière nuit blanche', 'quelles est la choise la plus illégale que tu ais faite', 'que ferais-tu si tu changeais de sexe une journée', 'qui te saoule en ce moment', 'raconte ton dernier reve', '']
  }

  drawActionCard(){
    this.cardText = this.types[this.rand(1, this.types.length)];
    this.hidden = true;
  }

  rand(min, max) {
    return (Math.floor((max-min)*Math.random())+min);
  }
}