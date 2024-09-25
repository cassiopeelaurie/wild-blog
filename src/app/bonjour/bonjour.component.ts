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
isAdmin: boolean = true;
}
