import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name!: string;
  email!: string;
  cardNumber!: string;
  expiration!: string;

  submitPayment() {
    // Implement payment logic here
    alert('Payment successful!');
  }
}
