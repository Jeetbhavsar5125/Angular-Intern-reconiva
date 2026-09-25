import { Component } from '@angular/core';
import { NameDisplay } from '../name-display/name-display';
@Component({
  selector: 'app-name-list',
  imports: [NameDisplay],
  templateUrl: './name-list.html',
  styleUrl: './name-list.css',
})
export class NameList {
  names = ['Jeet', '   ', '  Angular  ', ''];
}
