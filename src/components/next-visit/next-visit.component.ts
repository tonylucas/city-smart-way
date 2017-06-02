import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders.provider';
import { Platform } from 'ionic-angular';
import { ImportBookingComponent } from '../import-booking/import-booking.component.ts';
import { LoadingController, Loading } from 'ionic-angular';


@Component({
    selector: 'app-next-visit',
    templateUrl: './next-visit.component.html'
})

export class NextVisitComponent implements OnInit {

    headerData: any;
    orderId: number = 0;
    order: any = false;
    importBookingPage: any;
    orderImported: boolean;
    loader: Loading;

    constructor(
        private navParams: NavParams,
        private ordersProvider: OrdersProvider,
        public plt: Platform,
        public loadingCtrl: LoadingController
    ) {
        this.importBookingPage = ImportBookingComponent;


    }

    ngOnInit() {
        this.headerData = {
            showCart: false,
            showSearch: true,
            showImportBooking: true,
            isHome: true,
            title: "Votre prochaine visite"
        };
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Chargement..."
        });
        this.loader.present();
    }

    ionViewWillEnter() {
        // Mobile device
        // if (this.plt.is('cordova')) {
        if (localStorage.getItem("orderId")) {
            this.orderId = parseInt(localStorage.getItem("orderId"));
        }
        // }

        if (this.orderId && !this.order) {
            this.presentLoading();
            console.log("retrieving order from API");
            this.ordersProvider.getOrder(this.orderId)
                .map((res: any) => {
                    return JSON.parse(res._body);
                })
                .subscribe((response) => {
                    this.order = response;
                    this.loader.dismiss();
                    console.log(this.loader);
                    console.log("order", this.order);
                });
        }
    }

    deleteBooking() {
        console.log("deleteBooking");
        this.order = null;
        localStorage.setItem('orderId', '');
    }

}
