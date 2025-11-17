import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 milestones = [
    {
      title: 'Phase 1 — Data Collection & Cleaning (Week 1–2)',
      tasks: [
        'Extract, filter, clean and normalize attributes',
        'Handle missing fields'
      ]
    },
    {
      title: 'Phase 2 — Feature Engineering (Week 2–3)',
      tasks: ['Integrate the attributes and define how they will be used by the model']
    },
    {
      title: 'Phase 3 — Model Development (Week 4–5)',
      tasks: [
        'Train Gradient Boosting ensemble',
        'Tune hyperparameters',
        'Validate performance (accuracy, F1, macro-F1, confusion matrix)'
      ]
    },
    {
      title: 'Phase 4 — Results and Website (Week 5–6)',
      tasks: [
        'Develop a lightweight website',
        'Add explainability (top features contributing to prediction)',
        'Present our first results'
      ]
    },
    {
      title: 'Phase 5 — Testing & Deployment (Week 6–7)',
      tasks: [
        'Test with incomplete datasets',
        'Possible deployment of a demo (limited timeframe)'
      ]
    }
  ];
}
