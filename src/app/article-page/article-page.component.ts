import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../catalog/catalog.component';
import { Promo } from '../catalog/catalog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit {
  product: Product = new Product('', 'Nom par défaut', '0', new Promo(false, null, '')); // Default product

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const fetchedProduct = this.productService.getProductById(productId);
      if (fetchedProduct) {
        this.product = fetchedProduct;
      } else {
        console.error('Product not found');
      }
    }
  }
}

