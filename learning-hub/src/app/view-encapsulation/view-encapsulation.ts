import { Component } from '@angular/core';
import { NoneStyleComponent }     from './none-style/none-style';
import { EmulatedStyleComponent } from './emulated-style/emulated-style';
import { ShadowStyleComponent }   from './shadow-style/shadow-style';

@Component({
  selector: 'app-view-encapsulation',
  imports: [NoneStyleComponent, EmulatedStyleComponent, ShadowStyleComponent],
  templateUrl: './view-encapsulation.html',
  styleUrl: './view-encapsulation.css',
})
export class ViewEncapsulationDemoComponent {}
