import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name='Angular';
  //ngclass and styles 
  isSpecial = true;
  hasError = false;
  buttonTheme = 'primary-btn large-btn';
  
  fontSize = 18;
  textColor = '#2563eb';
  borderStyle = '2px solid #e2e8f0';
  //property binding 
  isUnchanged=signal(false);  
  text="DOM property changed";
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62mZn-g_FDVhNAYwqwPoESQG3SPPdwb3tqGphpeBmbQ&s=10"
  //event Binding
  isDisabled = signal(false);
  actionName = 'Close Dialog';
  toggleAction() {
    this.actionName = this.actionName === 'Close Dialog' ? 'Open Dialog' : 'Close Dialog';
  }
  isdisable_func(){
    this.isDisabled.set(true);
  }
  onButtonClick() {
  setTimeout(() => {
    this.isUnchanged.set(!this.isUnchanged());
  }, 2000);
}
  //Two Way Binding
  twoway="";

  //$usage of the $event in binding
  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}

