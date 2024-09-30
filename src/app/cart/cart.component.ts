import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
import { Product } from '../catalog/catalog.component';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Product[]) => {
      this.cartItems = items;  // Mise à jour des produits dans le panier
    });
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);  // Supprimer le produit du panier
  }

  clearCart() {
    this.cartService.clearCart();  // Vider le panier
  }
}
