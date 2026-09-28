import { Component } from '@angular/core';
import { DemoService } from './services';

// Child component inside viewProviders demo
@Component({
  selector: 'app-view-child',
  standalone: true,
  template: `<p style="color: green;">ViewChild inside template sees: {{ service.name }}</p>`
})
export class ViewChildComponent {
  constructor(public service: DemoService) {}
}

// Card component using viewProviders
@Component({
  selector: 'app-view-provider-card',
  standalone: true,
  imports: [ViewChildComponent],
  // viewProviders make service available ONLY to view children, NOT to projected content (<ng-content>)
  viewProviders: [{ provide: DemoService, useValue: { name: 'ViewProvider Service' } }],
  template: `
    <div style="border: 1px solid #ff9800; padding: 12px; margin-top: 10px;">
      <h4>ViewProvider Card Host</h4>
      <!-- Internal View Child gets viewProviders service -->
      <app-view-child></app-view-child>

      <!-- Projected content (<ng-content>) does NOT get viewProviders service -->
      <div style="background: #fff3e0; padding: 8px;">
        <p><strong>Projected Content below:</strong></p>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ViewProviderCardComponent {}
