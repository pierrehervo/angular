import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
 
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  
  pizzas: Pizza[];
  selectedPizza: Pizza; 

  //On injecte le service PizzaService dans le composant pour pouvoir l'utiliser avec this.pizzaService
  constructor(private pizzaService: PizzaService) { }
  
  //Equivalent du document.ready
  //Quand le composant est pret dans le dom, on récupère les pizzas
  ngOnInit(){
    this.pizzaService.getPizzas().then(pizzas =>this.pizzas = pizzas);
  }

  onSelect(pizza: Pizza){
    console.log(pizza);
    //On modifie la propriété pizza de l'instance de appComponent
    this.selectedPizza = pizza;
  }

}

