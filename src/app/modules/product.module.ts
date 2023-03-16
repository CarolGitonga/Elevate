import { NgModule } from "@angular/core";
import { ProductRepository } from "../models/product.repository";
import { StaticDataSource } from "../models/static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ProductModule{}

//The @NgModule decorator is used to create feature modules, and its properties tell Angular how the
//module should be used. There is only one property in this module, providers, and it tells Angular which
//classes should be used as services for the dependency injection feature,