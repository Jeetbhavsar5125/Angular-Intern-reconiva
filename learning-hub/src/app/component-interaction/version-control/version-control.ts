import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { VersionDisplay } from '../version-display/version-display';
@Component({
  selector: 'app-version-control',
  imports: [VersionDisplay],
  templateUrl: './version-control.html',
  styleUrl: './version-control.css',
})
export class VersionControl{
  major=1;
  minor=0;
  newMinor(){this.minor++}
  newMajor(){this.major++;this.minor=0;}
}
