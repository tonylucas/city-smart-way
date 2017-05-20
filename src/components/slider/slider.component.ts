import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfferComponent } from '../offer/offer.component';
import { Offer } from '../../models/offer';
import { ThumbnailImgDirective } from '../../directives/thumbnail-img';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html'
})

export class SliderComponent {

    config: Object = {
        slidesPerView: 5,
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

    @Input() push: Offer[];
    @Input() title: String;

    constructor(public navCtrl: NavController) {}

    // redirect(key: String, id: Number) {
    redirect(offer: Offer) {
        this.navCtrl.push(OfferComponent, {
            offer: offer
        });
    }
}
