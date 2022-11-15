import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Idli and Chutney',
      'Rice based Idli and white chutney',
      'https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=is&k=20&c=ee5328pQfD-dr3JHixx8Y1Cnry5lHdQSCJseOmshXk0=',
      [
        { name: 'Coconut (grated)', amount: '1 cup' },
        { name: 'Roasted gram dal', amount: '2 tbsp' },
        { name: 'Coriander leaves', amount: 'few' },
        { name: 'mint leaves / pudina', amount: 'few' },
        { name: 'ginger', amount: '1' },
        { name: 'chilli', amount: '2' },
        { name: 'tsp salt', amount: '½ tsp' },
        { name: 'water', amount: '1 cup' },
        { name: 'oil', amount: '2 tsp' },
        { name: 'mustard', amount: '1 tsp' },
        { name: 'urad dal', amount: '½ tsp' },
        { name: 'dried red chilli', amount: '2' },
        { name: 'idli-dosa rice(parboiled)', amount: '1 cup' },
        {
          name: 'Whole Urad Dal (skinned) or split Urad Dal',
          amount: '1/2 cup',
        },
        { name: ' Poha (flattened rice)', amount: '1/4 cup' },
      ]
    ),
    new Recipe(
      'Masala Dosa',
      'Masala dose, chutney and sambar',
      'https://media.istockphoto.com/id/1220111695/photo/a-dosa-originating-from-south-india-made-from-a-fermented-rice-and-lentil-served-with-sambar.jpg?s=612x612&w=is&k=20&c=2o3fo5ANpTygmHS-5yMEWSoB2FUydLKjrArRQefs9TA=',
      [
        { name: 'Sona masuri rice', amount: '3 cups' },
        { name: 'Methi / fenugreek seeds', amount: '½ tsp' },
        { name: 'urad dal', amount: '1cup' },
        { name: 'toor dal', amount: '2 tbsp' },
        { name: 'chana dal', amount: '2tbsp' },
        { name: 'poha / avalakki (rinsed)', amount: '1 cup' },
        { name: 'oil', amount: '1 tbsp' },
        { name: 'mustard', amount: '1 tsp' },
        { name: 'red chilli', amount: '1 dried' },
        { name: 'curry leaves', amount: 'as per taste' },
        { name: 'hing / asafoetida', amount: '1 pinch' },
        { name: 'chilli (finely chopped)', amount: '2' },
        { name: 'onion (sliced)', amount: '1' },
        { name: 'turmeric', amount: '¼ tsp' },
        { name: 'salt', amount: '1tsp' },
        { name: 'potato', amount: '3' },
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {}
}
