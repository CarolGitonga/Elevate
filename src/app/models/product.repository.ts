import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: any[] = [];
    

    constructor(private dataSource: RestDataSource){
        dataSource.getProducts().subscribe(data =>{//returns an observable that emits product data
            this.products = data;
            this.categories = data.map(p => p.category)//creates new array of category names by extracting the category property from each product object in the data.
            .filter((c, index,array) => array.indexOf(c) == index).sort();// filters out any duplicate categories and only keep the unique ones.
        });//indexOf() keeps only the first occurrence of each category.sort() sorts alphabetically
    }

    //This method returns an array of Product objects that match the provided category filter. 
    //If no category parameter is provided, it returns all products.
    getProducts(category: any = null): Product[]{
        return this.products
        .filter(p => category == null || category == p.category)
    }


//this method allows you to retrieve a single Product object based on a provided id parameter. 
//If a matching Product object is found, it is returned. Otherwise, undefined is returned.
    getProduct(id: number): Product | undefined{
        return this.products.find(p => p.id == id);
    }

    //this method allows you to retrieve an array of unique categories for the products stored in the class instance.
    getCategories(): string[]{
        return this.categories;
    }

    saveProduct(product:Product){
        if(product.id == null || product.id ==0) {
            this.dataSource.saveProduct(product)
            .subscribe(p => {
                this.products.splice(this.products
                    .findIndex(p => p.id == product.id), 1, product)
            });
        }
    }

    deleteProduct(id: number){
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products
                .findIndex(p => p.id == id), 1)
            })
    }
    
}
//When Angular needs to create a new instance of the repository, it will inspect the class and see that it
//needs a StaticDataSource object to invoke the ProductRepository constructor and create a new object.
//The repository constructor calls the data source’s getProducts method and then uses the subscribe
//method on the Observable object that is returned to receive the product data.