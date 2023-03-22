import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartprice: number = 0;

    addLine(product: Product, quantity: number = 1) {//takes two arguments.If quantity is not provided, the default value of 1 is used.
        let line = this.lines.find(line => line.product.id == product.id);//look for an existing CartLine object that matches the product argument using find method on the lines array of CartLine objects.
        if (line != undefined) {
            line.quantity += quantity;//If an existing CartLine is found, its quantity is increased by the value of quantity passed to the method.    
        } else {
            this.lines.push(new CartLine(product, quantity));//If no existing CartLine is found, a new CartLine object is created using  product and quantity arguments passed to the method and added to the lines array using the push method.
        }
        this.recalculate();//updates the itemCount and cartPrice properties of the Cart object based on the updated lines array.
    }

    updateQuantity(product: Product, quantity: number) {//takes two arguments. Product object to be updated, and quantity, which is the new quantity of the CartLine object.
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity);// If an existing CartLine is found, its quantity property is updated with the quantity argument passed to the method.
        }//If no existing CartLine is found, nothing happens and the method exits.
        this.recalculate();
    }

    removeLine(id?: number) {
        let index = this.lines.findIndex(line => line.product.id == id);//finds the index of the CartLine object that matches the id argument using the findIndex method on the lines array of CartLine objects.
        this.lines.splice(index, 1);//If an existing CartLine is found, it is removed from the lines array using the splice method with the index and 1 arguments. This removes one element from the lines array at the index of the found CartLine object.
        this.recalculate();

    }

    //remove all CartLine objects from the cart and reset the itemCount and cartPrice properties to zero.
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartprice = 0;
    }


    //The method starts by setting the itemCount and cartPrice properties to zero using the assignment operator =.
    //it iterates over each CartLine object in the lines array using the forEach method and a callback function that takes a single argument l, which 
    //represents the current CartLine object being processed.
 //Inside the callback function, it checks if the product property of the CartLine object exists and if the price property is not undefined. 
 //If both conditions are true, it updates the itemCount property by adding the quantity of the current CartLine object to it, and updates the cartPrice property by adding 
 //the product of the quantity and the price of the current CartLine object to it.
 //After iterating over all CartLine objects in the lines array, the itemCount and cartPrice properties of the Cart object are updated to reflect the updated values.
    private recalculate() {
        this.itemCount = 0;
        this.cartprice = 0;
        this.lines.forEach(l => {
            if (l.product && l.product.price !== undefined) {
                this.itemCount +=l.quantity;
                this.cartprice +=(l.quantity * l.product.price);
            }
        })    
    }

}



export class CartLine{
    constructor(public product: Product, public quantity: number) {}//single item in the Cart object, and it has two properties: product and quantity.

    get lineTotal() {//calculates and returns the total price of the CartLine object.
        if (this.product.price) {//If the price property of the product property of the CartLine object exists and is not undefined,
            // it calculates the total price by multiplying the quantity property by the price property of the product and returns the result. 
            return this.quantity * this.product.price;
        }
        return 0;//If the price property is undefined, it returns 0.
    }


}