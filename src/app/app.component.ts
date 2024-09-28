import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { BonjourComponent } from "./bonjour/bonjour.component";
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, BonjourComponent, CommonModule, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}