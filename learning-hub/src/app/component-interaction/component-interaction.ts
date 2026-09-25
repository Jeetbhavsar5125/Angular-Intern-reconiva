import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-component-interaction',
  imports: [ProductList], 
  templateUrl: './component-interaction.html',
  styleUrl: './component-interaction.css',
})
export class ComponentInteraction {

}
