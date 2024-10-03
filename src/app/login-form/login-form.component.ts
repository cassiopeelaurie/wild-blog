import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Form } from '../models/form.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

form: Form = {
email: '',
password: '',
  }

onSubmit() {
  console.log('tu as bien envoyé le formulaire !');
}
}
