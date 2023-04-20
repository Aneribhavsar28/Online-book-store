import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { SellerAuthComponent } from './seller-auth/seller-auth.component';
// import { SellerComponent } from './seller/seller.component';

import { BookComponent } from './book/book.component';
import { FeaturedauthorComponent } from './featuredauthor/featuredauthor.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // HeaderComponent,
   
    HeaderComponent,
    HomeComponent,
    // SellerAuthComponent,
    // SellerComponent,
    // LoginComponent,
    BookComponent,
    FeaturedauthorComponent,
    CartComponent,
    ContactUsComponent,
    LoginComponent,
    PaymentComponent,
    // SignupComponent

    // CartComponent,
    // CartServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // OwlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
