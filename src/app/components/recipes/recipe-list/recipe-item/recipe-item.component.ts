import { Component, OnInit, Input} from '@angular/core';

import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
  }

  @Input() recipeItem : any;

  onSelected(){
    this.RecipeService.recipeSelected.emit(this.recipeItem);
  }
}
