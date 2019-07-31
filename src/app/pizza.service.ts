import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  /**
   * Permet de récupérer toutes les pizzas du site
   * 
   * La fonction nous "promet" de renvoyer un tableau pizzas
   */
  getPizzas(): Promise<Pizza[]> {
    //On effectue une requete HTTP en GET sur notre API
    //Angular renvoie par défaut un observable mais on le convertit en promesse avec toPromise()
    //Quand la promesse est recue (then...), on renvoie les pizzas de l'API
    //as Pizza[] permet juste de tricher sur le type renvoyé par la fonction
    return this.http.get('http://localhost:3000/pizza').toPromise().then(
      response => response as Pizza[]
    );
  }

  //Permet de récupérer une pizza du site par son ID
  getOnePizza(id: number): Promise<Pizza> {
    //on va chercher dans le tableau PIZZAS la pizza qui contient l'id passé en paramètre
    //AU FAITE 2 == 2 renvoie true car la valeur est la même
    //MAIS 2 === 2 renvoie faux car le type n'est pas le même
    return this.http.get('http://localhost:3000/pizza/'+id).toPromise().then(
      response => response as Pizza
    );
  }
}
