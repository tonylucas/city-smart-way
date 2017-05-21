import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { CartItem } from '../../models/cart-item';
import { ThumbnailImgDirective } from '../../directives/thumbnail-img';
import { CartService } from '../../providers/cart.service';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'cart-modal',
    templateUrl: './modal-cart.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            // transition('void => *', [
            //     style({ transform: 'translateX(-100%)' }),
            //     animate(300)
            // ]),
            transition('* => void', [
                animate(300, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})

export class CartModal {

    public cart: CartItem[];

    constructor(
        public navCtrl: NavController,
        public params: NavParams,
        public cartService: CartService
    ) {
        this.cart = params.get('cart');
    }

    dismiss() {
        this.navCtrl.pop();
    }

    deleteItem(index) {
        console.log(index);
        this.cartService.deleteItem(index);
    }
}
