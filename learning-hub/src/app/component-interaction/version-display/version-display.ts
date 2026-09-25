import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-version-display',
  imports: [],
  templateUrl: './version-display.html',
  styleUrl: './version-display.css',
})
export class VersionDisplay implements OnChanges {
   @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    const entries: string[] = [];
    for (const prop in changes) {
      const c = changes[prop];
      if (c.isFirstChange()) {
        entries.push(`${prop} initialized to ${c.currentValue}`);
      } else {
        entries.push(`${prop}: ${c.previousValue} → ${c.currentValue}`);
      }
    }
    this.changeLog.push(entries.join(' | '));
  }
}