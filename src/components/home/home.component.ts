import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, Loading } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products';
import { Offer } from '../../models/offer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    lastOffers: Offer[];
    bestOffers: Offer[];
    customOffers: Offer[];
    loader: Loading;
    loaderHidden: boolean = false;

    constructor(
        public navCtrl: NavController,
        private productsProvider: ProductsProvider,
        public loadingCtrl: LoadingController) {
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Chargement...",
            // duration: 3000
        });
        this.loader.present();
    }

    ngOnInit() {
        this.presentLoading();

        this.productsProvider.getLastProducts().subscribe((response: Offer[]) => {
            this.lastOffers = response;
            this.loader.dismiss();
            this.loaderHidden = true;
        });

        // this.httpService.getData(bestOffersUrl).subscribe(response => {
        //     this.bestOffers = response.json();
        // });
        //
        // this.httpService.getData(customOffersUrl).subscribe(response => {
        //     this.customOffers = response.json();
        // });
    }
}
