import { Component, Input } from '@angular/core';
import { CartModalService } from '../../providers/cart-modal.service';
import { ImportBookingComponent } from '../import-booking/import-booking.component.ts';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.html'
})
export class ToolbarComponent {

    @Input() data: any;
    importBookingPage: any;

    constructor(
        public cartModal: CartModalService,

    ) {
        this.importBookingPage = ImportBookingComponent;
    }

    presentModal() {
        this.cartModal.present();

    }
}
