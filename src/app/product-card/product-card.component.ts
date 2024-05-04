import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports:  [NgFor,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() singleProduct : any ;
  counter = 0;
  cartItems: any[] = [];
  constructor(private router:Router,private counterService: CounterService,private cartService:CartService)
  {

  }
  ngOnInit() {
    this.counterService
    .getCounterVal()
    .subscribe((res: any) => (this.counter = res));

    this.cartService.getCartItems().subscribe(items => {
     this.cartItems = items;
   });
 }
  generateStarRating(rating: number): string {
    const roundedRating = Math.round(rating * 2) / 2; 
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
      starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
  }
  product_details(id:any){
    this.router.navigate(['single-product',id])

  }
  isInCart(productId: number): boolean {
    return this.cartItems.some(item => item.id === productId);
  }
  addToCart(productId: number) {
    this.counterService.addToCart(this.singleProduct);
    this.cartService.addToCart(this.singleProduct);
    console.log(`Product ${productId} added to cart.`);
  }
}

