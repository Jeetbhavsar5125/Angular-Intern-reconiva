import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  standalone: true
})
export class BadgeDirective {
  @Input() badgeText = 'DEFAULT BADGE';
  @Output() badgeClick = new EventEmitter<string>();

  onBadgeClicked() {
    this.badgeClick.emit(`Badge "${this.badgeText}" clicked!`);
  }
}
