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

  if (form.invalid) {
    return;
  }
  form.reset();
  this.submitted = false;
}

}
