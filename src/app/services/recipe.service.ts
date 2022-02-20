import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Mogmog',
      ingredient: ['Sha', 'aganamoto', 'chong', 'masala'],
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg',
      method: 'Manunual Cooking',
    },
    {
      id: 2,
      name: 'thukpa',
      src: 'https://www.ju-lehadventure.com/photos/ladakh_information/food-ladakh-10-must-try-local-dishes-and-drinks/thukpa.jpg',
      method: 'Mannual Cooking',
      ingredient: ['pha', 'chanto', 'masala'],
    },
    {
      id: 3,
      name: 'Skyu',
      src: 'https://www.ju-lehadventure.com/photos/ladakh_information/food-ladakh-10-must-try-local-dishes-and-drinks/skyu.jpg',
      method: 'Mannual Cooking',
      ingredient: ['pha', 'chanto', 'masala'],
    },
    {
      id: 4,
      name: 'Chhutagi',
      src: 'https://www.ju-lehadventure.com/photos/ladakh_information/food-ladakh-10-must-try-local-dishes-and-drinks/chhutagi.jpg',
      method: 'Mannual Cooking',
      ingredient: ['pha', 'chanto', 'masala'],
    },
  ];

  constructor() {}
  /**
   * get recipe list
   * @returns return the recipes list
   */
  getRecipes() {
    return this.recipes;
  }
  /**
   *Add recipe to the list
   * @param recipe Recipe Object to add
   */
  setRecipe(recipe: Recipe) {
    this.recipes.push({ ...recipe });
  }

  /**
   * this method accept recipeId and return the recipe object
   * @param recipeId recipe id to find
   * @returns return the recipe object
   */
  getRecipe(recipeId: number) {
    return { ...this.recipes.find((item) => item.id == recipeId) };
  }

  /**
   * this method accept recipeId and delete that item
   * @param recipeId recipe id to find
   */
  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter((item) => item.id != recipeId);
    console.log(this.recipes);
  }
}
