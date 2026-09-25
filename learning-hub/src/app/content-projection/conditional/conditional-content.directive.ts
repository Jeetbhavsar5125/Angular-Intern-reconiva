import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appConditionalContent]'
})
export class ConditionalContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
