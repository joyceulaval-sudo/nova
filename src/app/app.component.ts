import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) { }

  onClick(page: string) {
    this.router.navigate([page])
  }
}
