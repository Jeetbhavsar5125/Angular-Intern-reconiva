import { Component } from '@angular/core';
import { DemoService, IsolatedService } from './services';
import { ChildComponent } from './child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  // Parent-level providers
  providers: [
    { provide: DemoService, useValue: { name: 'Parent Service' } },
    IsolatedService
  ],
  template: `
    <div style="border: 1px solid #2196f3; padding: 16px; margin-top: 10px;">
      <h2>Parent Component</h2>
      <p><strong>Parent's DemoService:</strong> {{ parentService.name }}</p>
      <p><strong>Service Isolation (Parent Instance ID):</strong> #{{ isolatedService.id }}</p>

      <app-child></app-child>
    </div>
  `
})
export class ParentComponent {
  constructor(
    public parentService: DemoService,
    public isolatedService: IsolatedService
  ) {}
}
