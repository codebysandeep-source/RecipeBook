import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient[] = [];

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredient = this.slService.getIngradient();
    this.slService.ingradientChanged.subscribe((res:Ingredient[])=>{
      this.ingredient = res;
    });
  }

  onIngredientAdd(data: any) {
    if (this.ingredient.length < 10) {
      this.ingredient.push(data);
    }
  }

}
