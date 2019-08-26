import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe','This is a test', 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/08/seared-ginger-cumin-swordfish-blueberry-avocado-salsa.png?resize=684%2C500&ssl=1'),
    new Recipe('Another Test recipe','This is a test', 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/08/seared-ginger-cumin-swordfish-blueberry-avocado-salsa.png?resize=684%2C500&ssl=1')


  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){

    this.recipeWasSelected.emit(recipe);

  }

}
