import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/repository/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredientsArr) => {
      this.ingredients = ingredientsArr;
    });
  }
}
