import { Injectable } from '@angular/core';
import { Product } from './catalog/catalog.component'; 
import { Promo } from './catalog/catalog.component'; // Adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [
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

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
