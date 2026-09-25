import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimer } from '../parent-ref-timer/countdown-timer/countdown-timer';

@Component({
  selector: 'app-viewchild-timer',
  templateUrl: './viewchild-timer.html',
  imports: [CountdownTimer],
})
export class ViewchildTimer implements AfterViewInit {
  @ViewChild(CountdownTimer) private timer!: CountdownTimer;

  seconds = () => 0;

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timer.seconds(), 0);
  }

  start() { this.timer.start(); }
  stop() { this.timer.stop(); }
}
