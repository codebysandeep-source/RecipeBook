import { Component, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  @ViewChild("myForm") myForm: any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  AddItem(){
    let name = this.myForm.value.name;
    let amount = this.myForm.value.amount;
    let newIngredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(newIngredient);
  }

}
