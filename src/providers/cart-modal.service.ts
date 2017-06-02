import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { ModalController } from 'ionic-angular';
import { CartService } from './cart.service';
import { CartModal } from '../components/modal-cart/modal-cart.component';

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
