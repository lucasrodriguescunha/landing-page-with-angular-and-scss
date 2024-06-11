import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
})
export class NewsletterFormComponent {}
