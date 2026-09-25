import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  template: `
    <div class="hero-profile">
      <h4>{{ name }}</h4>
      <p><strong>Bio:</strong> {{ bio }}</p>
      <p><strong>Phone:</strong> {{ phoneNumber }}</p>
    </div>
  `,
  styles: [`
    .hero-profile {
      background: #f3e5f5;
      padding: 16px;
      border-radius: 8px;
      border-left: 4px solid #9c27b0;
    }
    h4 { color: #6a1b9a; margin: 0 0 8px; }
  `]
})
export class HeroProfileComponent {
  @Input() name!: string;
  @Input() bio!: string;
  @Input() phoneNumber!: string;
}
