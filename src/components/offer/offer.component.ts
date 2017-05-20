import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { HttpService } from '../../providers/http.service';
import { CartService } from '../../providers/cart';
import { Offer } from '../../models/offer';
import { CartModal } from '../modal-cart/modal-cart.component';

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
    cartModal;

    config: Object = {
        autoHeight: true
    };

    constructor(
        public modalCtrl: ModalController,
        private httpService: HttpService,
        public navCtrl: NavController,
        public navParams: NavParams,
        public cart: CartService) { }

    ngOnInit() {
        this.offer = this.navParams.get('offer')
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

    presentModal() {
        this.cartModal = this.modalCtrl.create(CartModal);
        this.cartModal.present();
    }

    dismissModal() {
        this.cartModal.dismiss();
    }

    addToCart(product) {
        let cartItem = product;
        cartItem.chosen_date = this.date;
        cartItem.persons = this.nbPersons;
        console.log(cartItem);
        this.cart.addItem(cartItem);

        this.presentModal();
    }
}
