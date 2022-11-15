import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/repository/recipe.service';
import { ShoppingListService } from 'src/app/repository/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addRecipeToShoppingList() {
    console.log(this.recipe.ingredients);
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
