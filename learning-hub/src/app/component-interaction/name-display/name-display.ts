import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-display',
  imports: [],
  templateUrl: './name-display.html',
  styleUrl: './name-display.css',
})
export class NameDisplay {
  displayName='Please provide name';
  @Input()
  set name(value:string){
    this.displayName = (value && value.trim()) || '<no name set>'
  }
}
