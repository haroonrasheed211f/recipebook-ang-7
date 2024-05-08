import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/RecipeItemComponent';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
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
      'a test recioe',
      'this is a simple',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfg1KiLIus0q-4IiL8tCkhE9WhrNSGdB2xbqfckUp5Q&s'
    ),
  ];

  constructor() {
    // You can initialize your recipes here, or fetch them from a service.
  }

  ngOnInit() {
    // Typically, initialization logic or data fetching logic goes here.
  }
}
