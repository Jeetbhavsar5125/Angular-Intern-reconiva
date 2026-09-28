import { Component } from '@angular/core';
import { SenderComponent } from './sender/sender';
import { ReceiverComponent } from './receiver/receiver';

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent],
  template: `
    <div style="padding: 20px; max-width: 500px;">
      <h2>Dependency Injection Service Sharing Demo</h2>
      <app-sender></app-sender>
      <app-receiver></app-receiver>
    </div>
  `
})
export class DependencyInjectionDemoComponent {}
