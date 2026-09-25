import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { NameList } from './name-list/name-list';
import {VersionControl} from './version-control/version-control';
import { VoteTaker } from './vote-taker/vote-taker';  
import { ParentRefTimer } from './parent-ref-timer/parent-ref-timer';
import { ViewchildTimer } from './viewchild-timer/viewchild-timer';
import { MissionControlComponent } from './mission-control/mission-control';
@Component({
  selector: 'app-component-interaction',
  imports: [ProductList, NameList, VersionControl, VoteTaker, ParentRefTimer, ViewchildTimer, MissionControlComponent],
  templateUrl: './component-interaction.html',
  styleUrl: './component-interaction.css',
})
export class ComponentInteraction {

}
