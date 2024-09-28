import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bonjour.component.html',
  styleUrl: './bonjour.component.scss'
})
export class BonjourComponent {
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
