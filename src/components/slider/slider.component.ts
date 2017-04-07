import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfferComponent } from '../offer/offer.component';
import { SectionOffer } from '../shared/model';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html'
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

    constructor(public navCtrl: NavController) {}

    redirect(key: String, id: Number) {
        console.log(key);
        // this.router.navigate(['offer', id]);
        this.navCtrl.push(OfferComponent, {
            offerId: id,
            test: "coucou"
        });
    }
}
