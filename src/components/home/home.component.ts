import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpService } from '../shared/http.service';
import { SectionOffer } from '../shared/model';
const lastOffersUrl: String = '/lastOffers.json';
const bestOffersUrl: String = '/bestOffers.json';
const customOffersUrl: String = '/customOffers.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    lastOffers: SectionOffer;
    bestOffers: SectionOffer;
    customOffers: SectionOffer;

    constructor(private httpService: HttpService, public navCtrl: NavController) {
        
    }

    ngOnInit() {
        this.httpService.getData(lastOffersUrl).subscribe(response => {
            this.lastOffers = response.json();
        });

        this.httpService.getData(bestOffersUrl).subscribe(response => {
            this.bestOffers = response.json();
        });

        this.httpService.getData(customOffersUrl).subscribe(response => {
            this.customOffers = response.json();
        });
    }
}
