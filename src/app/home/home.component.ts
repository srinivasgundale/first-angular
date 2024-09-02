import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      title : "Product 1",
      price: 10,
    },
    {
      title: "product 2",
      price: 20,
    },
    {
      title: "product 3",
      price: 30
    }
  ];
  selectedProduct:any = null;
  selectedProductPrice:any = 0;
  selectProduct(product:any){
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }
  handleProductClick(product:any) {
    console.warn(`Prodcut clicked ${product.title}`)
  }
  validateProductClick(product:any){
    // alert(`Prodcut hover ${product.title}`)
    this.selectedProductPrice = product.price;
    console.log("🚀 ~ HomeComponent ~ validateProductClick ~ selectedProductPrice:", this.selectedProductPrice)

  }
}
