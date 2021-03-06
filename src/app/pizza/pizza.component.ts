import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  // templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  templateUrl: './pizza.component.html',

})
export class PizzaComponent implements OnInit {

  //On transforme selectedPizza en attribut HTML
  @Input() selectedPizza: Pizza;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
  }


/**
 * Cette fonctionnalité appellera le service pizza
 * pour modifier la pizza sélectionnée
 */
  update() {
    console.log(this.selectedPizza);
    this.pizzaService.updatePizza(this.selectedPizza);
    //Masquer le formulaire
    this.selectedPizza = null;
  }
  

}
