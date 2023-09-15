import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

private recipes : Recipe[] = [
  new Recipe('Test Recipe','This is a Recipe','https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*'),
  new Recipe('Test Recipe1','This is a Recipe1','https://static.toiimg.com/thumb/102723123.cms?width=800&height=533&imgsize=151912')
];

getRecipe(){
  return this.recipes.slice();
}

}
