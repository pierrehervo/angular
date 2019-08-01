import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { FrontComponent } from './front/front.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent,
    PizzasComponent,
    FrontComponent,
    PizzaSingleComponent,
    PizzaCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'pizzas', component: PizzasComponent},
      { path: '', component: FrontComponent},
      { path: 'pizza/create', component: PizzaCreateComponent},
      { path: 'pizza/:id', component: PizzaSingleComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
