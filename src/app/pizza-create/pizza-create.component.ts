import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {
 pizza: Pizza = new Pizza();

  constructor(
    private pizzaService: PizzaService,
    private location: Location
    ) { }

  ngOnInit() {
  }
  //Je cree une propriété save
  save() {
    this.pizzaService.createPizza(this.pizza).then(pizza => {

        this.pizza = pizza;
        this.location.back();
      }
    )
  }
}
