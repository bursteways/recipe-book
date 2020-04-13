import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'hello world', 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
