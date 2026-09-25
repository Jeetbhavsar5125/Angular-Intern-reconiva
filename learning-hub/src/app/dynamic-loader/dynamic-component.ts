import { Component, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { AdService } from './ad.service';

@Component({
  selector: 'app-dynamic-component-loader',
  imports: [NgComponentOutlet],
  templateUrl: './dynamic-component-loader.html',
  styleUrl: './dynamic-component-loader.css'
})
export class DynamicComponentLoader {
  private adList = inject(AdService).getAds();
  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  get currentIndex() {
    return this.currentAdIndex;
  }

  get totalAds() {
    return this.adList.length;
  }

  displayNextAd() {
    this.currentAdIndex++;
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}
