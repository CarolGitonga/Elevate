import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Cart } from "../models/cart.model";
import { Order } from "../models/order.model";
import { OrderRepository } from "../models/order.repository";
import { ProductRepository } from "../models/product.repository";
import { RestDataSource } from "../models/rest.datasource";
import { StaticDataSource } from "../models/static.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository,
      { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ProductModule{}

//The @NgModule decorator is used to create feature modules, and its properties tell Angular how the
//module should be used. There is only one property in this module, providers, and it tells Angular which
//classes should be used as services for the dependency injection feature,