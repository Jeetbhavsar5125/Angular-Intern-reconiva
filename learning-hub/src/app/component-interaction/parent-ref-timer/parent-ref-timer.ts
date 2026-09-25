import { Component } from '@angular/core';
import {  CountdownTimer} from './countdown-timer/countdown-timer';
@Component({
  selector: 'app-parent-ref-timer',
  imports: [CountdownTimer],
  templateUrl: './parent-ref-timer.html',
  styleUrl: './parent-ref-timer.css',
})
export class ParentRefTimer {
  
}
