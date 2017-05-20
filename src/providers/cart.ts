import { Subject, Observable, Observer, BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { CartItem } from '../models/cart-item';


@Injectable()
export class CartService {
    // private _cart: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
    //
    // public cart: Observable<CartItem[]> = this._cart.asObservable();
    public cart: CartItem[];

    constructor(public storage: Storage) {
        this.loadInitialData();
    }

    loadInitialData() {
        this.cart = [];
        this.storage.ready().then(() => {
            this.storage.get('cart').then((val) => {
                if (val) {
                    this.cart = val;
                }
                console.log("cart", this.cart);
            });
        });
    }

    saveCart() {
        this.storage.set('cart', this.cart);
    }

    getCart(): CartItem[] {
        return this.cart;
    }

    // addItem(newItem: CartItem): Observable {
    addItem(newItem: CartItem) {
        // let obs = this.todoBackendService.saveTodo(newTodo);
        this.cart.push(newItem);
        this.storage.set('cart', this.cart);
        console.log('cart', this.cart);
        // obs.subscribe(
        // res => {
        // this._cart.next(this._cart.getValue().push(newItem));
        // });

        // return obs;
    }

    deleteItem(index: number) {
        this.cart.splice(index, 1);
        this.saveCart();
    }

}


//
// @Injectable()
// export class CartService {
//     // public cart$: Observable<CartItem[]>
//     public cart$: Observable<Array<CartItem>>;
//
//     private _cartObserver: any;
//     private _cartStore: {
//         // cart: CartItem[]
//         cart: Array<CartItem>
//     };
//
//     constructor() {
//         this.createCartObserver();
//     }
//
//     createCartObserver() {
//         console.log("createCartObserver");
//         this._cartStore = { cart: [] };
//         this.cart$ = new Observable((observer: any) => {
//             console.log(observer);
//             this._cartObserver = observer;
//         }).share();
//     }
//
//     addItem(product: CartItem) {
//         this._cartStore.cart.push(product);
//         this._cartObserver.next(this._cartStore.cart.slice(0));
//         console.log(this.cart$);
//     }
// }
