import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has('recipeId')) {
      }
      this.recipe = this.recipeService.getRecipe(
        parseInt(param.get('recipeId'))
      );
    });
  }

  onDelete() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete',
        buttons: [
          { text: 'Cancle', role: 'cancle' },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.recipe.id);
              this.router.navigate(['/recipe']);
            },
          },
        ],
      })
      .then((alertEle) => {
        alertEle.present();
      });
  }
}
