import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected form: ContactForm = { name: '', email: '', message: '' };
  protected sent = false;

  protected submit(): void {
    const { name, email, message } = this.form;
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Contacto desde portfolio - ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:antoniomora.gimenez@gmail.com?subject=${subject}&body=${body}`, '_blank');
    this.sent = true;
  }
}
