import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { SellerComponent } from './seller/seller.component';
// import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { FeaturedauthorComponent } from './featuredauthor/featuredauthor.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
// import { CartComponent } from './cart/cart.component';
const routes: Routes = [

    { path: "home", component: HomeComponent },
    {path:"login",component:LoginComponent},
    
    {path:"book",component:BookComponent},
    {path:"author",component:FeaturedauthorComponent},
    {path:"cart",component:CartComponent},
    {path:"contact",component:ContactUsComponent}
]

  
  


  
  
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }