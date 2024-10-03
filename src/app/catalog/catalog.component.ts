import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ArticleComponent } from "../article/article.component";


export class Promo {
  hasPromo: boolean;
  value: string | null ;
  endDate: Date;

  constructor(hasPromo: boolean, value: string | null, endDate: string) {
    this.hasPromo = hasPromo;
    this.value = value;
    this.endDate = new Date(endDate);
  }
  getRemainingTime(): string {
    const now = new Date();
    const timeDifference = this.endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return "Promotion terminée";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    let remainingTime = `${days} jour${days > 1 ? 's' : ''} `;
    if (hours > 0) {
      remainingTime += `${hours} heure${hours > 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
      remainingTime += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    return remainingTime.trim();
  }
  getDisplayValue(): string {
    return this.hasPromo ? `${this.value}%` : 'Pas de promotion';
  }
}

export class Product {
  id: string;
  name: string;
  price: string;
  promo: Promo;

  constructor(id: string, name: string, price: string, promo: Promo = new Promo(false, null, '')) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.promo = promo;
  }
}


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, ArticleComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
parentData: Product | null = null;

myProperty: string = '';

onReceiveDataFromChild(valueReceived: string) {
  this.myProperty = valueReceived;
}

  products: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService, private router: Router) {
    this.products = this.productService.getProducts();

    if (this.products.length > 0) {
      this.parentData = this.products[0]; // Récupère le produit à l'index 0
    }
  } 

  addToCart(product: Product) {
    this.cartService.addToCart(product);  // Ajoute le produit au panier
    this.removeFromCatalog(product.id);   // Supprime le produit du catalogue
    alert(`${product.name} a été ajouté au panier !`); 
  }

  removeFromCatalog(productId: string) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  parsePromotionValue(value: string | null): number {
    // Ne pas enlever le signe '-' pour garder les valeurs négatives
    return value ? parseInt(value.replace('%', ''), 10) : 0;
  }
  
  
  noProductsMessage(): string {
    if (!this.products || this.products.length === 0) {
      return "Aucun produit disponible, mais ça revient bientôt";
    }
    return '';
  }  
  noPromoMessage(product: Product): string {
    if (!product.promo.hasPromo) {
      return "Les promos reviennent bientôt ma loutre🦦";
    }
    return '';
  }
  navigateTo(productId: string) {
    this.router.navigate([`/article/${productId}`]);
  }
}
