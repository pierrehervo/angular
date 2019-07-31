import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pizzas', component: PizzasComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
