import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GlobalService } from 'src/app/utils/global.service';

import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has('recipeId')) {
        this.router.navigate(['/recipe']);
      }
      this.recipe = this.recipeService.getRecipe(
        parseInt(param.get('recipeId'))
      );
      if (!this.recipe?.id) {
        this.globalService.toast('Sorry recipe dosent exist');
        this.router.navigate(['/recipe']);
      } else {
        console.log(this.recipe);
      }
    });
  }

  onDelete() {
    this.globalService.popUp(
      {
        header: 'Are you sure?',
        message: 'Do you really want to delete',
        actionButtonText: 'Delete',
        cancleButtonText: 'Cancle',
      },
      () => {
        this.recipeService.deleteRecipe(this.recipe.id);
        this.router.navigate(['/recipe']);
      }
    );
  }
}
