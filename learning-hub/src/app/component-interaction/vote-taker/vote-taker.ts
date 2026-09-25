import { Component } from '@angular/core';
import { Voter } from '../voter/voter';   
@Component({
  selector: 'app-vote-taker',
  imports: [Voter],
  templateUrl: './vote-taker.html',
  styleUrl: './vote-taker.css',
})
export class VoteTaker {
  agree=0;
  disagree=0;
  voters=['Jeet','Rahul','jay'];
  onVoted(agree:boolean){
    agree ? this.agree++ : this.disagree++;
  }
}
