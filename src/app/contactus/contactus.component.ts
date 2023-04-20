import { Component } from '@angular/core';
// import { OnInit } from '@angular/core';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  onSubmit() {
    // TODO: Send the form data to a server or API
    // and handle success and error responses
    this.successMessage = 'Your message has been sent!';
  }
}