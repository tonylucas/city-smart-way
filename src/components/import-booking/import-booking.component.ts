import { Component } from '@angular/core';
import { OrdersProvider } from '../../providers/orders.provider';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the ImportBookingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'import-booking',
    templateUrl: './import-booking.component.html'
})
export class ImportBookingComponent {

    text: string;
    headerData: any;
    bookingNb: number;
    lastName: string;
    orderImportError: boolean = false;

    constructor(
        public ordersProvider: OrdersProvider,
        public navCtrl: NavController
    ) {
        console.log('Hello ImportBookingComponent Component');

        this.headerData = {
            showBackButton: true,
            showCart: false,
            showSearch: false,
            isHome: false,
            title: "City Smart Way"
        };
    }

    importBooking() {
        console.log('importBooking');
        this.ordersProvider.checkOrder(this.bookingNb, this.lastName)
            .subscribe(matching => {
                if(matching) {
                    localStorage.setItem("orderId", this.bookingNb.toString());
                    this.navCtrl.pop();
                    console.log('order ok');
                    this.orderImportError = false;
                } else {
                    console.log('order unknown');
                    this.orderImportError = true;
                }
            });

        // console.log(this.bookingNb);
        // console.log(this.lastName);
    }


}
