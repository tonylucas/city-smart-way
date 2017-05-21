import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-next-visit',
    templateUrl: './next-visit.component.html'
})

export class NextVisitComponent implements OnInit {

    headerData: any;

    constructor() { }
    
    ngOnInit() {
        this.headerData = {
            showCart: true,
            showSearch: true,
            isHome: true,
            title: "Votre prochaine visite"
        };
    }

}
