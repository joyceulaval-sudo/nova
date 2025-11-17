import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-footer',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatCardModule, CommonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
@Input() footerText: string=''
}
