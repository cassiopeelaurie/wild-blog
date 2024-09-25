import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article: Article = {
    title: 'Titre de l\'article',
    author: 'John Doe',
    content: 'Voici le contenu de l\'article.',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: ''
  };
  
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
    
  }
}
interface Article {
  title: string,
  author: string,
  content: string,
  image: string,
  isPublished: boolean,
  comment: string,
}