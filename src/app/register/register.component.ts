import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AngularFireAuth] //On autorise le service dans le composant
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(
    public afAuth: AngularFireAuth,
    private location: Location
    ) { }

  ngOnInit() {
    //Créer un utilisateur
    
  }
  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.email).then(
      success => console.log(success)
    ).catch(
      error => this.message = error.message
    );
  }

}
