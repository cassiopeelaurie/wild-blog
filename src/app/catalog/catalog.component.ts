import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

class Promo {
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

class Product {
  id: string;
  name: string;
  price: string;
  promo: Promo;

  constructor(id: string, name: string, price: string, promo: Promo) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.promo = promo;
  }
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: Product[] = [];

  constructor() {
    this.products = [
      new Product('1', 'T-shirt', '19,99€', new Promo(false, null,  '2024-10-15')),
      new Product('2', 'Chemise', '39,99€', new Promo(true, "-25", '2024-10-06')),
      new Product('3', 'Robe', '59,99€', new Promo(true, "-10", '2024-10-10')),
      new Product('4', 'Sweat-shirt', '29,99€', new Promo(true, "-30", '2024-10-05')),
      new Product('5', 'Jupe', '24,99€', new Promo(true, "-5", '2024-10-30')),
      new Product('6', 'Short', '14,99€', new Promo(true, "-20", '2024-09-25')),
      new Product('7', 'Veste', '89,99€', new Promo(false, null, '2024-10-04')),
      new Product('8', 'Pull', '49,99€', new Promo(true, "-40", '2024-10-12')),
      new Product('9', 'Manteau', '99,99€', new Promo(false, null, '2024-10-20')),
      new Product('10', 'Pantalon', '34,99€', new Promo(false, null, '2024-10-04')),
      new Product('11', 'Chaussures', '59,99€', new Promo(true, "-35", '2024-10-15')),
      new Product('12', 'Casquette', '9,99€', new Promo(true, "-10", '2024-10-30')),
      new Product('13', 'Écharpe', '12,99€', new Promo(false, null, '2024-10-04')), 
      new Product('14', 'Chapeau', '19,99€', new Promo(true, "-20", '2024-10-25')),
      new Product('15', 'Jean', '49,99€', new Promo(false, null, '2024-10-10')),
      new Product('16', 'Baskets', '79,99€', new Promo(true, '-15', '2024-10-20')),
      new Product('17', 'Montre', '99,99€', new Promo(true, '-50', '2024-10-01')),
      new Product('18', 'Ceinture', '29,99€', new Promo(false, null, '2024-10-15')),
      new Product('19', 'Sacs à main', '89,99€', new Promo(true, '-10', '2024-10-25')),
      new Product('20', 'Vêtements de sport', '69,99€', new Promo(true, '-20', '2024-10-30'))
    ];
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
}
