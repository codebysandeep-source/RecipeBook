import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  // styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : any;

  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.recipeSelected.subscribe((res:Recipe)=>{
        this.selectedRecipe = res;
    });
  }


}
