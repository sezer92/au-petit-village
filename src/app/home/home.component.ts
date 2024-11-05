import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];  // Liste filtrée
  searchText: string = '';       // Texte de recherche
  sortOrder: boolean = true;              // Valeur booléenne : true pour croissant, false pour décroissant

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
    this.sortProducts();  // Trie initial par ordre croissant
  }

  // Méthode de tri
  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      return this.sortOrder ? a.price - b.price : b.price - a.price;
    });
  }

  // Inverse le sens de tri (croissant/décroissant)
  toggleSortOrder(): void {
    this.sortOrder = !this.sortOrder;  // Inverse la valeur de sortOrder
    this.sortProducts();  // Trie les produits selon le nouvel ordre
  }

  // Filtrer les produits par nom
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.sortProducts();  // Trie les produits filtrés
  }
}
