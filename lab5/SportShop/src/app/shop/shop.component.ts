import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
})
export class ShopComponent {
  constructor(private repository: ProductRepository) {}
  get products(): Product[] {
    return this.repository.getProducts();
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
}
