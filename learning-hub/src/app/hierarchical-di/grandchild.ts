import { Component, Optional, Self, SkipSelf, Host } from '@angular/core';
import { DemoService, MissingService } from './services';

@Component({
  selector: 'app-grandchild',
  standalone: true,
  // Component-level provider for Grandchild
  providers: [{ provide: DemoService, useValue: { name: 'Grandchild Service' } }],
  template: `
    <div style="border: 1px dashed #9c27b0; padding: 10px; margin-top: 10px;">
      <h4>Grandchild Component</h4>

      <p><strong>Nearest Provider (Default):</strong> {{ defaultService.name }}</p>

      <!-- @Self() checks ONLY Grandchild -->
      <p><strong>@Self():</strong> {{ selfService?.name || 'Null (Not Found)' }}</p>

      <!-- @SkipSelf() skips Grandchild, gets Child or Parent -->
      <p><strong>@SkipSelf():</strong> {{ skipSelfService.name }}</p>

      <!-- @Optional() prevents crash if service is missing -->
      <p><strong>@Optional():</strong> {{ optionalService ? optionalService.name : 'null (Safely handled)' }}</p>

      <!-- @Host() stops search at Host component boundary -->
      <p><strong>@Host():</strong> {{ hostService?.name || 'Null (Reached Host Boundary)' }}</p>
    </div>
  `
})
export class GrandchildComponent {
  constructor(
    // Normal injection -> Nearest wins
    public defaultService: DemoService,

    // @Self() -> Checks ONLY current component's injector
    @Self() @Optional() public selfService: DemoService,

    // @SkipSelf() -> Skips current component's injector, searches parent
    @SkipSelf() public skipSelfService: DemoService,

    // @Optional() -> Returns null instead of throwing error if not found
    @Optional() public optionalService: MissingService,

    // @Host() -> Limits search up to host component
    @Host() @Optional() public hostService: MissingService
  ) {}
}
