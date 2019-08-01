import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  
  pizzas: Pizza[];
  selectedPizza: Pizza; 

  //On injecte le service PizzaService dans le composant pour pouvoir l'utiliser avec this.pizzaService
  constructor(
    private pizzaService: PizzaService,
    private modalService: NgbModal
    ) { }
  
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

  //On click pour ouvrir une modal qui sert à supp la pizza
  //et on choisi la bonne pizza à supprimer
  open(content, pizza: Pizza) {
    this.modalService.open(content).result.then(result => {
      //ce code s'exécute à la fermeture de la modal
      if (result === 'delete') {
        this.pizzaService.deletePizza(pizza)
        //On 'rafraichi' la liste des pizzas à la suppression
        .then(() => this.pizzaService.getPizzas())
        .then(pizzas => this.pizzas = pizzas);
      }
    });
  }
}

