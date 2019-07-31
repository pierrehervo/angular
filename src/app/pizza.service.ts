import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';

export const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'queen.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: 'fromage.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
]; 

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  //Permet de récuperer toutes les pizzas du sites
  getPizzas(): Pizza[] {
    return PIZZAS;
  }

  //Permet de récupérer une pizza du site par son ID
  getOnePizza(id: number): Pizza{
    //on va chercher dans le tableau PIZZAS la pizza qui contient l'id passé en paramètre
    //AU FAITE 2 == 2 renvoie true car la valeur est la même
    //MAIS 2 === 2 renvoie faux car le type n'est pas le même
    return PIZZAS.find(pizza => pizza.id == id);
  }
}
