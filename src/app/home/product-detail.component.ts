import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product">
      <h2>{{ product.title }} Details</h2>
      <p>{{ product.price }}</p>
      <button (click)="onProductClick()" (mouseover)="onProductHover()">Click Me</button>
    </div>
  `
})
export class ProductDetailComponent {
  @Input() product: any;
  @Output() productClicked = new EventEmitter<any>();
  @Output() productHover = new EventEmitter<any>();

  onProductClick() {
    this.productClicked.emit(this.product);
  }
  onProductHover() {
    this.productHover.emit(this.product);
  }
}
