import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomeComponent } from '../home/home.component';
import { NextVisitComponent } from '../next-visit/next-visit.component';
import { ProfileComponent } from '../profile/profile.component';
import { Intercom } from '@ionic-native/intercom';


declare var cordova: any;

@Component({
    templateUrl: './tabs.component.html'
})

export class TabsComponent implements OnInit {
    tab1Root = HomeComponent;
    tab3Root = NextVisitComponent;
    tab4Root = ProfileComponent;

    constructor(public plt: Platform) {
        this.plt.ready().then((readySource) => {
            console.log('ready');
            console.log(this.plt.platforms());
            console.log(this.plt.versions());

            if (this.plt.is('cordova')) {
                cordova.plugins.intercom.registerIdentifiedUser({ email: "tony3lucas@hotmail.fr" });
            }
        });
    }

    ngOnInit() {

    }

    showChatModal() {
        if (this.plt.is('cordova')) {
            console.log('showChatModal');
            cordova.plugins.intercom.displayMessenger();
        } else {
            alert('Intercom - Uniquement disponible sur iOS ou Android');
        }
    }
}
