import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { BadgeDirective } from './badge.directive';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  styleUrl:'./custom-card.component.css',
  templateUrl: './custom-card.component.html',
  // Directives composed directly into the host element!
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['highlightColor: color'] // Aliased input 'color'
    },
    {
      directive: BadgeDirective,
      inputs: ['badgeText: badge'], // Aliased input 'badge'
      outputs: ['badgeClick: clicked'] // Aliased output 'clicked'
    }
  ]
})
export class CustomCardComponent {}
