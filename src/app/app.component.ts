import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './pizza.service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pizza party';
  pizzas: Pizza[];
  selectedPizza: Pizza; 

  //On injecte le service PizzaService dans le composant pour pouvoir l'utiliser avec this.pizzaService
  constructor(private pizzaService: PizzaService) { }
  
  //Equivalent du document.ready
  //Quand le composant est pret dans le dom, on récupère les pizzas
  ngOnInit(){
    this.pizzas = this.pizzaService.getPizzas();
    console.log(this.pizzas);
  }

  onSelect(pizza: Pizza){
    console.log(pizza);
    //On modifie la propriété pizza de l'instance de appComponent
    this.selectedPizza = pizza;
  }

}
