import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  templateUrl: './sender.html'
})
export class SenderComponent {
  // Inject the shared service using dependency injection
  private dataService = inject(DataService);

  sendMessage(inputVal: string) {
    if (inputVal.trim()) {
      this.dataService.changeMessage(inputVal);
    }
  }
}
