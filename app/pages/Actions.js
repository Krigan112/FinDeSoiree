import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Component} from 'angular2/core';

@Component({
  selector:"actions",
  template:`
    <button (click)="drawActionCard()">Action!</button>
    <div>{{cardText}}</div>
  `,
  directives: [IONIC_DIRECTIVES]
})

export class Actions{
  constructor(){
    this.types = ['retourne tes habits', 'imite un autre joueur, les autres devinent qui tu imites', 'rentre ta tete dans ton haut pendant 10 tours', 'crie "je suis gay" par la fenetre', 'ton voisin d\'en face choisit','ton voisin de droite choisit', 'ton voisin de gauche choisit', 'reste sur un pied jusqu\'à ton prochain tour', 'enlève un vetement', 'fais 10 pompes', 'appelle un numéro au hasard et demande lui une histoire', 'bois de l\'eau salée', 'dessine quelque chose sur ton voisin de droite', 'dis un gros mot par phrase pendant 3 tours', 'fais fondre un glaçon dans tes sous-vetements', 'bois 1 litre d\'eau cul-sec', 'ne cligne pas des yeux pendant un tour, sinon tu repioche une action', 'aller demander du beurre et un balais à la voisine, en ayant l\'air défoncé']
  }

  drawActionCard(){
    this.cardText = this.types[this.rand(1, this.types.length)];
  }

  rand(min, max) {
    return (Math.floor((max-min)*Math.random())+min);
  }
}
