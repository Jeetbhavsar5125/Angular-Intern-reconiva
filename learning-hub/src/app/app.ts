import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { DataBinding } from './data-binding/data-binding';
import { ViewEncapsulationDemoComponent } from './view-encapsulation/view-encapsulation';
import { ComponentInteraction } from './component-interaction/component-interaction';
import { ContentProjection } from './content-projection/content-projection';
import {  DynamicComponentLoader} from './dynamic-loader/dynamic-component'
@Component({
  selector: 'app-root',
  imports: [Header, DataBinding, ViewEncapsulationDemoComponent, ComponentInteraction, ContentProjection,DynamicComponentLoader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('leaning-hub');
}
