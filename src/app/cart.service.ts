import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  addToCart(book: any) {
    this.cart.push(book);
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart.reduce((total, book) => total + book.price, 0);
  }
}
