import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector:"actionsOuVerites",
  template:`
    <button (click)="dropCoin()">Action, ou vérité?</button>
  `,
  directives:[IONIC_DIRECTIVES]
})

export class ActionsOuVerites{

  @Output() coinFlip = new EventEmitter()

  constructor(){
    this.types = ['action', 'verite'];
  }

  dropCoin(){
    if(this.rand(1, 3)==1)
    {
      this.coinFlip.next("action");
    }else{
      this.coinFlip.next("verite");
    }
  }

  rand(min, max) {
    return (Math.floor((max-min)*Math.random())+min);
  }
}
