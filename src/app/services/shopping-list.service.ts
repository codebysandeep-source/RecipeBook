import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingradientChanged = new EventEmitter<Ingredient[]>();

  private ingredient: Ingredient[] = [
    new Ingredient('Mangoes', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngradient(){
    return this.ingredient.slice();
  }
  addIngradient(ingredient:Ingredient){
    this.ingredient.push(ingredient);
    this.ingradientChanged.emit(this.ingredient.slice());
  }
}
