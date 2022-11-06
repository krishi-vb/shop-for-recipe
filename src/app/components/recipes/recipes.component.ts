import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { NavButton } from 'src/app/types/nav-buttons.types';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  // btnClick: NavButton = NavButton.RECIPES;

  constructor() {}

  ngOnInit(): void {}

  setSelectedRecipe(recipe) {
    console.log(recipe);
  }
}
