import { Component, ContentChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ConditionalContentDirective } from './conditional-content.directive';

@Component({
  selector: 'app-conditional',
  imports: [NgTemplateOutlet],
  templateUrl: './conditional.html',
  styleUrl: './conditional.css'
})
export class Conditional {
  @ContentChild(ConditionalContentDirective) content!: ConditionalContentDirective;
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
