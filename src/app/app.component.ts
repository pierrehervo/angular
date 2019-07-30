import { Component } from '@angular/core';

export class Pizza{
  id: number;
  name: string;
  price: number;
  image: string;
}

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'queen.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: 'fromage.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
]; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pizzaparty';
  pizzas = PIZZAS;
  pizza: Pizza; 

  pizza: Pizza = {
    id: 1,
    name: '4 fromages',
    price: 10,
    image: '4-fromages.jpg'
  }

  onSelect(pizza: Pizza){
    console.log(pizza);
    //On modifie la propriété pizza de l'instance de appComponent
    this.selectedPizza = pizza;
  }

}
