import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  newMessage: Message = {
    lastname: '',
    firstname: '',
    email: '',
    content: ''
  }

submitted = false;

onSubmit(form: NgForm) {
  this.submitted = true;
  console.log('Formulaire soumis', form); // Debug: pour voir si la soumission est bien détectée

  if (form.invalid) {
    console.log('Formulaire invalide'); // Debug: si le formulaire est invalide
    return;
  }
  form.reset();
  this.submitted = false; // Réinitialisation après soumission réussie
}

}
