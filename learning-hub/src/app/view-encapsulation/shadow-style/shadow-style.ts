import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-style',
  templateUrl: './shadow-style.html',
  styleUrl: './shadow-style.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowStyleComponent {}
