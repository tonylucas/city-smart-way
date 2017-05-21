import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CartItem } from '../models/cart-item';
import { CartModal } from '../components/modal-cart/modal-cart.component';
import { ModalController } from 'ionic-angular';

@Injectable()
export class CartService {
    
    public cart: CartItem[];
    public cartModal;

    constructor(
        public storage: Storage,
        public modalCtrl: ModalController
    ) {
        this.loadInitialData();
    }

    loadInitialData() {
        this.cart = [];
        this.storage.ready().then(() => {
            this.storage.get('cart').then((val) => {
                if (val) {
                    this.cart = val;
                }
            });
        });
    }

    saveCart() {
        this.storage.set('cart', this.cart);
    }

    getCart(): CartItem[] {
        return this.cart;
    }

    addItem(newItem: CartItem) {
        this.cart.push(newItem);
        this.storage.set('cart', this.cart);
    }

    deleteItem(index: number) {
        this.cart.splice(index, 1);
        this.saveCart();
    }

}
