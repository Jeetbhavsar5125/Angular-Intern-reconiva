import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 ProductList=[{
  name:'Laptop',
  price:1000
 },
 {
  name:'Phone',
  price:2000
 },
 {
  name:'Tablet',
  price:3000
 },
{
  name:'Ipad',
  price:5000
}]
}
