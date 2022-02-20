import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }
}
