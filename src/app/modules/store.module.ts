import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CartDetailComponent } from "../components/cart-detail/cart-detail.component";
import { CartSummaryComponent } from "../components/cart-summary/cart-summary.component";
import { CheckoutComponent } from "../components/checkout/checkout.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { StoreComponent } from "../components/store/store.component";
import { CounterDirective } from "../directives/counter.directive";
import { ProductModule } from "./product.module";

@NgModule({
    imports: [ProductModule,
              BrowserModule, 
              FormsModule,
              ProductModule,
              RouterModule
            
              
            ],
    declarations: [StoreComponent,
                   CounterDirective, 
                   CartSummaryComponent,
                   CartDetailComponent,
                   CheckoutComponent,
                   NavbarComponent
                   
                ],
    exports: [StoreComponent,
              CartDetailComponent,
              CheckoutComponent,
              NavbarComponent

    ]
})
export class StoreModule{}