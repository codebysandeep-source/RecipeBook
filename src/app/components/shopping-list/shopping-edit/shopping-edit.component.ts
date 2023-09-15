import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService:ShoppingListService) {

  }

  ngOnInit(): void {
  }

  @ViewChild("myForm") myForm: any;

  AddItem(){
    let name = this.myForm.value.name;
    let amount = this.myForm.value.amount;
    let newIngredient = new Ingredient(name,amount);
    this.slService.addIngradient(newIngredient);
  }

}
