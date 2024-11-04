import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];  // Liste des produits
  sortOrder = true;      // Valeur booléenne : true pour croissant, false pour décroissant

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // Récupère les produits et les trie initialement
    this.products = this.productService.getProducts();
    this.sortProducts();  // Trie initial par ordre croissant
  }

  // Méthode de tri
  sortProducts(): void {
    this.products.sort((a, b) => {
      return this.sortOrder ? a.price - b.price : b.price - a.price;
    });
  }

  // Inverse le sens de tri (croissant/décroissant)
  toggleSortOrder(): void {
    this.sortOrder = !this.sortOrder;  // Inverse la valeur de sortOrder
    this.sortProducts();               // Trie les produits selon le nouvel ordre
  }
}
