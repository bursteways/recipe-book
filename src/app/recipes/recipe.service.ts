import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
   new Recipe(
     'Chocolate Cake',
     'A delicious chocolate cake.',
     'https://tastesbetterfromscratch.com/wp-content/uploads/2010/06/Hersheys-Perfectly-Chocolate-Chocolate-Cake-13.jpg',
    [
        new Ingredient('chocolate', 1)
      ]
   ),
    new Recipe(
      'Burger',
      'Chili cheese burger',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Loaded-Chili-Cheeseburger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382375812129.jpeg',
      [
        new Ingredient('chili', 1),
        new Ingredient('burger meat', 1),
        new Ingredient('rolls', 1),
        new Ingredient('cheese', 1),
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  };

  getRecipe(idx: number) {
    return this.recipes[idx];
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  };
}
