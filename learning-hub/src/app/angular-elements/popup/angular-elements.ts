import { Component, inject } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-angular-elements-demo',
  standalone: true,
  templateUrl: './angular-elements.html',
  styles: [`
    .demo-container {
      padding: 20px;
      border: 2px dashed #42a5f5;
      border-radius: 8px;
      margin: 16px 0;
    }
    button {
      background-color: #26a69a;
      color: white;
      border: none;
      padding: 10px 18px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background-color: #00897b;
    }
  `]
})
export class AngularElementsDemoComponent {
  private popupService = inject(PopupService);

  triggerPopup() {
    this.popupService.showAsElement('Hello! This popup is an Angular Element (Web Component)!');
  }
}
