import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
  { path:"store", component: StoreComponent},
  { path:"cart", component: CartDetailComponent},
  { path:"checkout", component: CheckoutComponent},
  { path:"**", redirectTo: "/store"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
