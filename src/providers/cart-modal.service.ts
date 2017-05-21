import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CartItem } from '../models/cart-item';
import { CartModal } from '../components/modal-cart/modal-cart.component';
import { ModalController } from 'ionic-angular';
import { CartService } from './cart.service';

@Injectable()
export class CartModalService {

    public cart: CartItem[];
    public cartModal;

    constructor(
        public modalCtrl: ModalController,
        public cartService: CartService
    ) { }

    present() {
        this.cartModal = this.modalCtrl.create(CartModal, {
            cart: this.cartService.getCart()
        });
        this.cartModal.present();
    }

    dismiss() {
        this.cartModal.dismiss();
    }

}
