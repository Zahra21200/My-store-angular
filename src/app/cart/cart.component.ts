import { CounterService } from './../services/counter.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  cartTotal: number = 0;
  tax: number = 0;
  grandTotal: number = 0;

  constructor(
    private counterService: CounterService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  removeItem(productId: number) {
    this.cartService.removeCartItem(productId);
    this.counterService.updateCounterVal(this.cartItems.length);
  }
  handleUpdateQuantity(productId: number, newQuantity: number) {
    const itemToUpdate = this.cartItems.find(item => item.id === productId);
    if (itemToUpdate) {
      itemToUpdate.quantity = newQuantity;
      this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const originalProduct = this.cartItems.find(product => product.id === productId);
      if (originalProduct) {
        originalProduct.stock -= (itemToUpdate.quantity - newQuantity);
      }

      this.cartService.updateCartItemQuantity(productId, newQuantity);

      this.calculateTotals();
    }
  }
  calculateTotals() {
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.tax = this.cartTotal * 0.1;
    this.grandTotal = this.cartTotal + this.tax;
  }
}
