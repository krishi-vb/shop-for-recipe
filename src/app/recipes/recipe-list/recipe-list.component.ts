import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Test Description for Recipe',
      'https://media.istockphoto.com/photos/indian-pulav-vegetable-rice-veg-biryani-basmati-rice-picture-id495188382?s=612x612'
    ),
    new Recipe(
      'A Test Recipe',
      'Test Description for Recipe',
      'https://media.istockphoto.com/photos/indian-pulav-vegetable-rice-veg-biryani-basmati-rice-picture-id495188382?s=612x612'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
