import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor = '#ff00008a';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.transition') transition = 'background-color 0.3s ease';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
