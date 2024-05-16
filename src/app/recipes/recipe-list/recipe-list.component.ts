import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [RecipeItemComponent, CommonModule],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simple test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfg1KiLIus0q-4IiL8tCkhE9WhrNSGdB2xbqfckUp5Q&s'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
