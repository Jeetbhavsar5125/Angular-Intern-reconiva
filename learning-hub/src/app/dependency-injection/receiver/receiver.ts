import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  templateUrl: './receiver.html'
})
export class ReceiverComponent implements OnInit {
  // Inject the exact same service instance
  private dataService = inject(DataService);
  receivedMessage = '';

  ngOnInit() {
    this.dataService.currentMessage$.subscribe(msg => {
      this.receivedMessage = msg;
    });
  }
}
