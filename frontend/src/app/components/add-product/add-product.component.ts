import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe((result) => {
      console.log('Product added successfully');
    });
  }
}
