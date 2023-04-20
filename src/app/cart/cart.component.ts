import { Component } from '@angular/core';
import { CartService } from '../cart.service';
// import { UserService } from '../user.service';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
// import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];
  

  constructor(
    public cartService: CartService,
    
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  payNow() {
    // Implement payment logic here
    alert('Payment successful!');
  }   
    addToWishlist() {
      // Implement wishlist logic here
      alert('Added to wishlist!');
      }
    }
  
