import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-job-ad',
  template: `
    <div class="job-ad">
      <h4>{{ headline }}</h4>
      <p>{{ body }}</p>
    </div>
  `,
  styles: [`
    .job-ad {
      background: #e3f2fd;
      padding: 16px;
      border-radius: 8px;
      border-left: 4px solid #2196f3;
    }
    h4 { color: #1565c0; margin: 0 0 8px; }
  `]
})
export class HeroJobAdComponent {
  @Input() headline!: string;
  @Input() body!: string;
}
