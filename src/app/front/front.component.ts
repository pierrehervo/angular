import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }

}
