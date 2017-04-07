import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpService } from '../shared/http.service';
import { Offer } from '../shared/model';

const lastOffersUrl: String = '/lastOffers/offers/';
const format: String = '.json';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html'
})

export class OfferComponent implements OnInit {

    id: string;
    offer: Offer;

    // constructor(private route: ActivatedRoute, private httpService: HttpService, public navCtrl: NavController) { }
    constructor(private httpService: HttpService, public navCtrl: NavController, public navParams: NavParams) { }

    ngOnInit() {
        this.id = this.navParams.get('offerId')
        // this.route.params.subscribe(params => {
        //     this.id = params['id'];
        //
        //     this.httpService.getData(lastOffersUrl + this.id + format).subscribe(response => {
        //         this.offer = response.json();
        //     });
        // });

        this.httpService.getData(lastOffersUrl + this.id + format).subscribe(response => {
            this.offer = response.json();
        });
    }
}
