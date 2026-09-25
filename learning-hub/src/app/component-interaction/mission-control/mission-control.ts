import { Component } from '@angular/core';
import { MissionService } from './mission.service';
import { AstronautComponent } from '../astronaut/astronaut';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.html',
  imports: [AstronautComponent],
  providers: [MissionService],
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) this.nextMission = 0;
  }
}
