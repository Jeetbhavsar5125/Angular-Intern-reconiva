import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
})
export class CountdownTimer implements OnDestroy {
  message = 'Press Start';
  seconds = signal(10);
  private clearTimer: VoidFunction | undefined;

  start() {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.seconds.update(s => s - 1);
      if (this.seconds() === 0) {
        this.message = 'Blast off! ';
        this.clearTimer?.();
      } else {
        if (this.seconds() < 0) this.seconds.set(10);
        this.message = `T-${this.seconds()} seconds...`;
      }
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }

  stop() {
    this.clearTimer?.();
    this.message = `Paused at T-${this.seconds()}`;
  }

  ngOnDestroy() { this.clearTimer?.(); }
}
