import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name='Angular';
  text="DOM property changed";
  isDisabled = signal(false);
  isdisable_func(){
    this.isDisabled.set(true);
  }
}

