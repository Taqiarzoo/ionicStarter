import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {}
}
