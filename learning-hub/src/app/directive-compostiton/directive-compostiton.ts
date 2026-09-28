import { Component } from '@angular/core';
import { CustomCardComponent } from './custom-card-.component';
@Component({
  selector: 'app-directive-compostiton',
  imports: [CustomCardComponent],
  templateUrl: './directive-compostiton.html',
  styleUrl: './directive-compostiton.css',
})
export class DirectiveCompostiton {
   message = 'Click or interact with the card!';
  onCardBadgeClick(eventMessage: string) {
    this.message = eventMessage;
  }
}
