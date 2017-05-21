import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { HttpService } from '../../providers/http.service';
import { CartService } from '../../providers/cart.service';
import { CartModalService } from '../../providers/cart-modal.service';
import { Offer } from '../../models/offer';


@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html'
})

export class OfferComponent implements OnInit {

    id: string;
    offer: Offer;

    nbPersons: number = 1;
    nbChildren: number = 0;
    date;
    headerData: any;
    config: Object = {
        autoHeight: true
    };

    constructor(
        private httpService: HttpService,
        public navCtrl: NavController,
        public navParams: NavParams,
        public cartModal: CartModalService,
        public cartService: CartService
    ) { }

    ngOnInit() {
        this.offer = this.navParams.get('offer');

        this.headerData = {
            showCart: true,
            showSearch: true,
            isHome: false,
            title: this.offer.categories[0].name
        };

        // this.route.params.subscribe(params => {
        //     this.id = params['id'];
        //
        //     this.httpService.getData(lastOffersUrl + this.id + format).subscribe(response => {
        //         this.offer = response.json();
        //     });
        // });

        // this.httpService.getData(lastOffersUrl + this.id + format).subscribe(response => {
        //     this.offer = response.json();
        // });
    }

    // presentModal() {
        // this.cartModal = this.modalCtrl.create(CartModal);
        // this.cart.present();
        // this.cartModal.present();
    // }

    // dismissModal() {
        // this.cart.dismiss();
        // this.cartModal.dismiss();
    // }

    addToCart(product) {
        let cartItem = product;
        cartItem.chosen_date = this.date;
        cartItem.persons = this.nbPersons;
        this.cartService.addItem(cartItem);

        this.cartModal.present();
    }
}
