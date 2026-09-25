import { Component } from '@angular/core';
import { SingleSlot } from './single-slot/single-slot';
import { MultiSlot } from './multi-slot/multi-slot';
import { Conditional } from './conditional/conditional';
import { ConditionalContentDirective } from './conditional/conditional-content.directive';

@Component({
  selector: 'app-content-projection',
  imports: [SingleSlot, MultiSlot, Conditional, ConditionalContentDirective],
  templateUrl: './content-projection.html',
  styleUrl: './content-projection.css'
})
export class ContentProjection {}
