import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
//API en prod
//http://my-json-server.typicode.com/pierrehervo/angular/pizza

  //API en local
  //http://localhost:3000/pizza

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
    return this.http.get(this.apiUrl+'/pizza').toPromise().then(
      response => response as Pizza[]
    );
  }


  /**
   * Permet de récupérer une pizza du site par son ID
   * 
   */
  getOnePizza(id: number): Promise<Pizza> {
    //on va chercher dans le tableau PIZZAS la pizza qui contient l'id passé en paramètre
    //AU FAITE 2 == 2 renvoie true car la valeur est la même
    //MAIS 2 === 2 renvoie faux car le type n'est pas le même
    return this.http.get(this.apiUrl+'/pizza/'+id).toPromise().then(
      response => response as Pizza
    );
  }


  /**
   * Permet de modifier une pizza sur notre API
   */
  updatePizza(pizza: Pizza)  {
    //LA méthode PUT de HTTP est la même que POST, permet de mettre à jour un élement
    //Le 1er argument (aka pizza.id) de put  est l'URL de l'API
    //Le 2eme argument (pizza) est l'objet à mettre à jour
    return this.http.put(this.apiUrl+'/pizza/'+pizza.id, pizza).toPromise().then((response) => response);
  }


/**
 * Permet de créer une voulle ppizza sur l'API
 * 
 * 1)Sur la page /pizzas, ajouter un lien pour créer une pizza.
 * 2)Ce lien va vers une route /pizza/create qui est liée au composant de PizzaCreate
 * 3) Le composant pzzaCreate va contenir une propriété pizza. Par defaut la pizza est null. Il contiendra une methode save()
 * 4)Le template du composant va contenir 3 champs (name, price, image). L'image est un champ texte (toto.jpg) on mettra directement l'image dans le dossier.
 * 5) Au click sur le bouton du formulaire (Ajouter), on appellera la méthode save() du composant
 * 6) Dans la méthode save() du composant on appellera la méthode createPizza() de notre service pour insérer la pizza dans l'api via le service http (avec la méthode post())
 *7) On masquera le formulaire apres la sauvegarde
 */ 
  createPizza (pizza: Pizza) {
    return this.http.post(this.apiUrl+'/pizza', pizza).toPromise().then((response) => response);
  }


  /**
   * Permet de supprimer une pizza
   */
  deletePizza(pizza: Pizza){
    return this.http.delete(this.apiUrl+'/pizza/'+pizza.id).toPromise().then((response) => response);
  }
}