import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
const products = require('./products-list.json');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allproducts:any=products;
}
