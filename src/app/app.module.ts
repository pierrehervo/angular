import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { FrontComponent } from './front/front.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzasComponent,
    FrontComponent,
    PizzaSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pizzas', component: PizzasComponent},
      { path: '', component: FrontComponent},
      { path: 'pizza/:id', component: PizzaSingleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
