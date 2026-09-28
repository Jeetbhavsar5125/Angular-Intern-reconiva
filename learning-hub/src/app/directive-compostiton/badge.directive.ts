import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  standalone: true
})
export class BadgeDirective {
  @Input() badgeText = 'DEFAULT BADGE';
  @Output() badgeClick = new EventEmitter<string>();


  @HostListener('click')
  onClick() {
    this.badgeClick.emit(`Badge "${this.badgeText}" clicked!`);
  }
}
