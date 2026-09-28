import { Component } from '@angular/core';
import { DemoService } from './services';
import { ParentComponent } from './parent';
import { ViewProviderCardComponent, ViewChildComponent } from './view-providers-demo';

@Component({
  selector: 'app-hierarchical-di',
  standalone: true,
  imports: [ParentComponent, ViewProviderCardComponent, ViewChildComponent],
  template: `
    <div style="padding: 20px; font-family: sans-serif; max-width: 700px;">
      <h1>Hierarchical Dependency Injection Demo</h1>

      <div style="background: #f5f5f5; padding: 12px; border-radius: 6px;">
        <h3>Injector Hierarchy</h3>
        <code>Root &rarr; Parent &rarr; Child &rarr; Grandchild</code>
      </div>

      <!-- Section 1: Nearest Provider & DI Hierarchy -->

      <section style="margin-top: 20px;">
        <h2>1. Nearest Provider & Resolution Modifiers (@Self, @SkipSelf, @Optional, @Host)</h2>
        <p><strong>Root DemoService Value:</strong> {{ rootService.name }}</p>
        <app-parent></app-parent>
      </section>

      <!-- Section 2: providers vs viewProviders -->

      <section style="margin-top: 30px;">
        <h2>2. providers vs viewProviders</h2>
        <app-view-provider-card>
          <!-- Projected into ng-content -> ignores viewProviders, receives Root Service -->
          <app-view-child></app-view-child>
        </app-view-provider-card>
      </section>

      <!-- Cheatsheet Summary -->
      <section style="margin-top: 30px; background: #e8f5e9; padding: 16px; border-radius: 6px;">
        <h3>What to Remember</h3>
        <ul>
          <li><strong>Nearest provider:</strong> Angular searches from current component up to Root; first provider found wins.</li>
          <li><strong>@Self():</strong> Searches ONLY the current component's injector.</li>
          <li><strong>@SkipSelf():</strong> Skips current component and searches parent injectors.</li>
          <li><strong>@Optional():</strong> Returns <code>null</code> if service is missing instead of crashing.</li>
          <li><strong>@Host():</strong> Stops searching at the host component boundary.</li>
          <li><strong>providers:</strong> Available to component and all child components (including projected content).</li>
          <li><strong>viewProviders:</strong> Available ONLY inside component's template, NOT to projected content.</li>
          <li><strong>Service Isolation:</strong> Providing a service at component level creates a separate isolated instance.</li>
        </ul>
      </section>
    </div>
  `
})
export class HierarchicalDiDemoComponent {
  constructor(public rootService: DemoService) {}
}
