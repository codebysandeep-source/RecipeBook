import { Ingredient } from "./ingredient.model";

export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;
  public recipeIngradient : Ingredient[]

  constructor(name: string, description: string, imagePath: string, recipeIngradient: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.recipeIngradient = recipeIngradient;
  }

}
