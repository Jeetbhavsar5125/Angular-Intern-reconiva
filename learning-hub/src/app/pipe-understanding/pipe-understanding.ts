import { Component } from '@angular/core';
import { DatePipe,UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-pipe-understanding',
  imports: [DatePipe,UpperCasePipe],
  templateUrl: './pipe-understanding.html',
  styleUrl: './pipe-understanding.css',
})
export class PipeUnderstanding {
  dateValue = new Date(1998, 11, 17);
  name="Angular";
   toggle = true;
  birthday = new Date(2005, 11, 17);
  get format()   { return this.toggle ? 'mediumDate' : 'fullDate'; }

  toggleFormat() { this.toggle = !this.toggle; }
}
