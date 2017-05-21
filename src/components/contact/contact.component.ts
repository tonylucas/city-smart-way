import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';

declare var cordova: any;

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {

    constructor(
        public navCtrl: NavController) {

        }

    public loggedIn = false;
    public intercom: Intercom;



    ngOnInit() {
        // this.intercom = cordova.plugins.intercom;
        // console.log(this.intercom);


        // if (this.loggedIn) {
        //     // We're logged in, we can register the user with Intercom
        //     this.intercom.registerIdentifiedUser({ userId: "123456" });
        //     // intercom.registerIdentifiedUser({email: "alice@example.com"});
        // } else {
        //     this.intercom.registerUnidentifiedUser();
        // }
        // this.intercom.setLauncherVisibility('VISIBLE');
        // console.log(this.intercom.setLauncherVisibility('VISIBLE'));


        if (typeof cordova !== 'undefined') {
            this.intercom.registerIdentifiedUser({email: "tony3lucas@hotmail.fr"});
            // this.intercom.displayMessageComposer();
            // this.intercom.setLauncherVisibility('GONE');
            // this.intercom.setInAppMessageVisibility('VISIBLE');
            console.log(this.intercom);
        } else {
            console.log("cordova undefined");
        }
    }

    displayMessageComposer() {
        this.intercom.displayMessageComposer();
    }

}
