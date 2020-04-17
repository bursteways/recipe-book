import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('test', 'hello world', 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg'),
    new Recipe('test 2', 'hello world', 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
