import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit(): void {}

  addIngredient(ingredient: Ingredient) {
    if (this.ingredients.find((el) => el.name === ingredient.name)) {
      alert('Ingredient already added');
      return;
    }
    this.ingredients.push(ingredient);
  }
}
