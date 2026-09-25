import { Injectable, Type } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad';
import { HeroProfileComponent } from './hero-profile/hero-profile';

export interface AdItem {
  component: Type<any>;
  inputs: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds(): AdItem[] {
    return [
      {
        component: HeroJobAdComponent,
        inputs: {
          headline: 'Seeking Superman!',
          body: 'Must be able to fly and save the world before lunch.'
        }
      },
      {
        component: HeroProfileComponent,
        inputs: {
          name: 'Bombasto',
          bio: 'Blows things up with his mind.',
          phoneNumber: '555-123-4567'
        }
      },
      // ...
    ];
  }
}
