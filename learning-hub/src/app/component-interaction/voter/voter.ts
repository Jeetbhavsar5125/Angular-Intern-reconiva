import { Component ,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-voter',
  imports: [],
  templateUrl: './voter.html',
  styleUrl: './voter.css',
})
export class Voter {
  @Input() voterName: string='';
  @Output() voted = new EventEmitter<boolean>();
  hasVoted=false;
  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.hasVoted=true;
  }
}
