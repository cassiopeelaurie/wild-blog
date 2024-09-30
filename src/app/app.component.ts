import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { BonjourComponent } from "./bonjour/bonjour.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, BonjourComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cassiopée';
    articles = [
        { 
          title: 'Angular 16: Les nouveautés', 
          author: 'Alice', 
          content: 'Les nouveautés d\'Angular 16 incluent...', 
          image: 'https://via.placeholder.com/350x150',
          isPublished: true, 
          comment: '', 
          likes: 120 
        },
        { 
          title: 'Développer une API REST', 
          author: 'Bob', 
          content: 'Développer une API REST nécessite...', 
          image: 'https://via.placeholder.com/350x150',
          isPublished: false, 
          comment: '', 
          likes: 75 
        },
        { 
          title: 'Pourquoi TypeScript est essentiel ?', 
          author: 'Charlie', 
          content: 'TypeScript apporte de la robustesse...', 
          image: 'https://via.placeholder.com/350x150',
          isPublished: true, 
          comment: '', 
          likes: 200 
        }
      ];
}
