import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const products = require('./products-list.json');

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  allproducts:any[]=products;
  productDetails:any;
    constructor(private activatedRoute:ActivatedRoute){
    }
    generateStarRating(rating: number): string {
      const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
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
    ngOnInit()
    {
      console.log(this.activatedRoute.snapshot.params['id']);
      this.productDetails=this.allproducts.find((product:any)=>product.id==this.activatedRoute.snapshot.params['id']);
      console.log(this.productDetails);
    }
}
