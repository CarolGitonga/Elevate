import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository){}

//a property called products returns an array of Product objects
//when you access the products property, it will call getProducts on repository and return an array of Product objects.
  get products(): Product[] {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage//calculate the starting index of the products array to return, based on the currently selected page and the number of products to display per page.
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage);// returns a subset of the products array, starting from the calculated starting index and including the number of products to display per page. 
  }//slice() method returns a new array containing the selected elements.

  //a property named categories returns an array of strings.
  //The property is defined using a getter method, which means that the value of the property is computed dynamically every time it is accessed.
  //when you access the categories property, it calls the getCategories method on the repository object and return an array of strings
  get categories(): string[]{
    return this.repository.getCategories();
  }

  //this method is used to update the selectedCategory property of an object instance. 
  //If a new category value is provided, it is assigned to the selectedCategory property. If no argument is provided, then the selectedCategory property is set to undefined.
  changeCategory(newCategory?: any){
    this.selectedCategory = newCategory
  }

//a pagination feature that allows the user to navigate between pages of data. 
//When called, this method will update the selectedPage property of the object to the specified new page number, thereby changing the currently displayed page of data.
  changePage(newPage: number){
    this.selectedPage = newPage;
  }


  //allows the user to change the number of products displayed per page. 
  //When called, this method will update the productsPerPage property of the object to the specified new page size, and then reset the currently displayed page to the first page, ensuring that the new page size takes effect immediately.
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }


}
