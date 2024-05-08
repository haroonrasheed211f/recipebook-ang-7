import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [NgFor], // Assuming Recipe here is a component, directive, or pipe, which seems incorrect in this context
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {}
