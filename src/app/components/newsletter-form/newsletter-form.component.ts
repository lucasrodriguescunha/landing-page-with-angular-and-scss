import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";

@Component({
    selector: 'newsletter-form',
    standalone: true,
    templateUrl: './newsletter-form.component.html',
    styleUrl: './newsletter-form.component.scss',
    imports: [BtnPrimaryComponent]
})
export class NewsletterFormComponent {

}
