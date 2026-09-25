import { Injectable, Injector, inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private injector = inject(Injector);

  constructor() {
    const PopupElement = createCustomElement(PopupComponent, { injector: this.injector });


    if (!customElements.get('my-popup')) {
      customElements.define('my-popup', PopupElement);
    }
  }

  
  showAsElement(message: string) {
    
    const popupEl = document.createElement('my-popup') as any;
    popupEl.message = message;
    popupEl.addEventListener('closed', () => {
      document.body.removeChild(popupEl);
    });
    document.body.appendChild(popupEl);
  }
}