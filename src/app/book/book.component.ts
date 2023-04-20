import { Component } from '@angular/core';
// import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = [
    {
      title: 'It Ends With Us',
      image: 'itends.jpeg',
      price: 200
    },
    {
      title: 'It Starts With Us',
      image: 'stars.jpeg',
      price: 19.99
    },
    {
      title: 'Think Like A Monk',
      image: 'think.jpeg',
      price: 14.99
    },
    {
      title: 'Ikigai',
      image: 'ikigai.jpeg',
      price: 19.99
    },
    {
      title: 'Alchemist',
      image: 'alchemist.jpeg',
      price: 19.99
    },
    {
      title: 'A touch of eternity ',
      image: 'touch.jpeg',
      price: 19.99
    },
    {
      title: 'Build Dont Think',
      image: 'build.jpeg',
      price: 19.99
    },
    {
      title: 'Atomic Habit',
      image: 'atomic.jpeg',
      price: 19.99
    },
    {
      title: 'Lifes Amaizing Secrets',
      image: 'life.jpeg',
      price: 19.99
    },
    {
      title: 'The Subtile ARt Of Not Giving A fuck',
      image: 'FUCK.png',
      price: 19.99
    },
   
    {
      title: 'Do Epic Shit',
      image: 'epic1.png',
      price: 19.99
    },
    {
      title: 'Get Epic Shit Done',
      image: 'epic2.jpeg',
      price: 19.99
    },
    

  ];
  constructor(private router: Router, private cartService: CartService) {}

  addBookToCart(book:any) {
    this.cartService.addToCart(book);
    this.router.navigateByUrl('/cart');
  }
}
  

