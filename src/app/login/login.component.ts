import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    // Perform login validation and authentication here
    // If the login is successful, navigate to the home component
    this.router.navigate(['/home']);
  }
}
