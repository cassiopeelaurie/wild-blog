import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/catalog/catalog.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];  // Panier initialement vide
  private cartSubject = new BehaviorSubject<Product[]>([]);  // Utilisé pour notifier les composants de changements

  getCart() {
    return this.cartSubject.asObservable();  // Observable pour suivre l'état du panier
  }

  addToCart(product: Product) {
    this.cart.push(product);  // Ajouter le produit au panier
    this.cartSubject.next(this.cart);  // Notifier les abonnés des changements
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(product => product.id !== productId);  // Supprimer le produit du panier
    this.cartSubject.next(this.cart);  // Notifier les abonnés
  }

  clearCart() {
    this.cart = [];  // Vider le panier
    this.cartSubject.next(this.cart);  // Notifier les abonnés
  }
}
