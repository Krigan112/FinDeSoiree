import {Component} from 'angular2/core';

@Component({
  selector: 'glasses',
  template:`
    <div>{{drinkCounter}}</div>
  `
})

export class Glasses{
  drink(){
    if(this.drinkCounter == null){
      this.drinkCounter = 0;
    }
    this.drinkCounter = this.drinkCounter++;
  }
}
