import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Offer, SectionOffer } from '../shared/model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
  
  config: Object = {
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      544: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  @Input() push: SectionOffer;
  
  constructor(private router: Router) {}

  redirect(key: String, id: Number) {
    console.log(key);
    this.router.navigate(['offer', id]);
  }
}