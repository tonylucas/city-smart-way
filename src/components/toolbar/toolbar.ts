import { Component, Input, OnInit} from '@angular/core';
import { CartModalService } from '../../providers/cart-modal.service';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.html'
})
export class ToolbarComponent {

    @Input() data: any;

    constructor(public cartModal: CartModalService) { }

    presentModal() {
        this.cartModal.present();
    }
}
