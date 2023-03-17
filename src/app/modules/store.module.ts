import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "../components/store/store.component";
import { CounterDirective } from "../directives/counter.directive";
import { ProductModule } from "./product.module";

@NgModule({
    imports: [ProductModule, BrowserModule, FormsModule],
    declarations: [StoreComponent, CounterDirective],
    exports: [StoreComponent]
})
export class StoreModule{}