import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [Header, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('leaning-hub');
}
