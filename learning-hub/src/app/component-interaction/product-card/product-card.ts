import { Component, Input } from '@angular/core';
import { ProductList } from '../product-list/product-list';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() productName: string='';
  @Input('cost') price: number=0;
}
