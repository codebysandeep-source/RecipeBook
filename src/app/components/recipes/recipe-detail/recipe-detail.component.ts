import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() recipe : any;

}
