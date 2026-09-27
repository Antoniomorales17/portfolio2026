import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { copyText } from '../../utils/clipboard';

@Component({
  selector: 'app-contact-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-dialog.html',
  styleUrl: './contact-dialog.css',
})
export class ContactDialog {
  readonly profile = PROFILE;
  readonly message = signal('');
  readonly notice = signal<string | null>(null);
  private noticeTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly whatsappHref = `https://wa.me/${PROFILE.phoneHref.replace(/\D/g, '')}`;
  readonly mailtoHref = computed(
    () =>
      `mailto:${PROFILE.email}?subject=${encodeURIComponent('Contacto desde tu portfolio')}` +
      `&body=${encodeURIComponent(this.message())}`,
  );

  open(): void {
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  onMessageInput(value: string): void {
    this.message.set(value);
  }

  async copyEmail(): Promise<void> {
    await this.copyWithNotice(this.profile.email, 'Email copiado');
  }

  async copyPhone(): Promise<void> {
    await this.copyWithNotice(this.profile.phone, 'Telefono copiado');
  }

  async copyMessage(): Promise<void> {
    const text = this.message().trim();
    await this.copyWithNotice(
      text ? `${text}\n\n(${this.profile.name}, ${this.profile.phone})` : this.profile.email,
      text ? 'Mensaje copiado' : 'Email copiado',
    );
  }

  private async copyWithNotice(value: string, successMessage: string): Promise<void> {
    const success = await copyText(value);
    this.showNotice(
      success ? successMessage : 'No se pudo copiar. Selecciona el texto y copia manualmente.',
    );
  }

  private showNotice(message: string): void {
    this.notice.set(message);
    if (this.noticeTimeout) {
      clearTimeout(this.noticeTimeout);
    }
    this.noticeTimeout = setTimeout(() => {
      this.notice.set(null);
      this.noticeTimeout = null;
    }, 2400);
  }
}
