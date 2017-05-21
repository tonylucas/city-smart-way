import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { NextVisitComponent } from '../next-visit/next-visit.component';
import { ProfileComponent } from '../profile/profile.component';
import { Intercom } from '@ionic-native/intercom';

declare var cordova: any;

@Component({
    templateUrl: './tabs.component.html'
})

export class TabsComponent implements OnInit {
    tab1Root = HomeComponent;
    tab2Root = ContactComponent;
    tab3Root = NextVisitComponent;
    tab4Root = ProfileComponent;
    intercom: Intercom;

    constructor(public plt: Platform) { }

    ngOnInit() { }

    showChatModal() {
        if (this.plt.is('mobileweb')) {
            alert('Uniquement disponible sur iOS ou Android')
        } else {
            cordova.plugins.intercom.registerIdentifiedUser({ email: "tony3lucas@hotmail.fr" });
            cordova.plugins.intercom.displayMessenger();
        }
    }
}
