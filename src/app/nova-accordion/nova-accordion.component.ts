import { Component, Input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-nova-accordion',
    imports: [
    MatCardModule,
    MatExpansionModule,
    MatCardModule, CommonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
],
  templateUrl: './nova-accordion.component.html',
  styleUrl: './nova-accordion.component.scss'
})
export class NovaAccordionComponent {
  @Input() data!: {
    title: string;
    description: string;
    imageGroup: string;
    paragraph: string;
    note: string;
    imageGroupAlt: string;
    imageDescription: string;
    imageDescriptionAlt: string;
  };
}
