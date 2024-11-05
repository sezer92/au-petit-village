import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { id: '1', name: 'Figurine A', price: 30, image: 'src/assets/images/figurine-A.png', description: 'Description de la figurine A' },
    { id: '2', name: 'Figurine B', price: 40, image: 'src/assets/images/figurine-B.jpeg', description: 'Description de la figurine B' }
  ];


  getProducts() {
    return this.products;
  }

  getProductById(id: string | null) {
    return this.products.find(product => product.id === id);
  }
}
