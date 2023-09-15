import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient[] = [
    new Ingredient('Mangoes', 5),
    new Ingredient('Tomatoes', 10),
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(data: any) {
    if (this.ingredient.length < 10) {
      this.ingredient.push(data);
    }
  }

}
