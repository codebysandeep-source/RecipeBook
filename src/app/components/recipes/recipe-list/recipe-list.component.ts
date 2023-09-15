import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [];

  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipe();
  }




}
