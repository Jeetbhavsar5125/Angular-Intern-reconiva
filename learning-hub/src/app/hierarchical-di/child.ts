import { Component, SkipSelf } from '@angular/core';
import { DemoService, IsolatedService } from './services';
import { GrandchildComponent } from './grandchild';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandchildComponent],
  // Component-level providers: Creates separate Child instances
  providers: [
    { provide: DemoService, useValue: { name: 'Child Service' } },
    IsolatedService
  ],
  template: `
    <div style="border: 1px solid #4caf50; padding: 12px; margin-top: 10px;">
      <h3>Child Component</h3>
      <p><strong>Child's DemoService:</strong> {{ childService.name }}</p>
      <p><strong>Service Isolation (Child Instance ID):</strong> #{{ isolatedService.id }}</p>

      <!-- SkipSelf test at Child level -->
      <p><strong>Child @SkipSelf() (gets Parent Service):</strong> {{ parentServiceFromSkip.name }}</p>

      <app-grandchild></app-grandchild>
    </div>
  `
})
export class ChildComponent {
  constructor(
    public childService: DemoService,
    public isolatedService: IsolatedService,
    // Skips Child's provider to get Parent's DemoService
    @SkipSelf() public parentServiceFromSkip: DemoService
  ) {}
}
