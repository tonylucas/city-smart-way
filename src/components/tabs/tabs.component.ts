import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { NextVisitComponent } from '../next-visit/next-visit.component';
import { YouComponent } from '../you/you.component';

@Component({
    templateUrl: './tabs.component.html'
})

export class TabsComponent {
    tab1Root = HomeComponent;
    tab2Root = ContactComponent;
    tab3Root = NextVisitComponent;
    tab4Root = YouComponent;
}
