import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza',
  // templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],

  template:
  `
  <div *ngIf="selectedPizza">
  <h2>{{selectedPizza.name}}</h2>
  <p>{{selectedPizza.price}} &euro;</p>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedPizza.name" placeholder="name">
  </div>
</div>
` 
})
export class PizzaComponent implements OnInit {

  //On transforme selectedPizza en attribut HTML
  @Input() selectedPizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
