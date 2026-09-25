import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-internal',
  standalone: true,
  template: `
    <div class="popup-box">
      <span> {{ message }}</span>
      <button (click)="closed.emit()">✖ Close</button>
    </div>
  `,
  styles: [`
    .popup-box {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #1e88e5, #1565c0);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 16px;
      font-family: sans-serif;
      z-index: 9999;
    }

    button {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  `]
})
export class PopupComponent {
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();
}
