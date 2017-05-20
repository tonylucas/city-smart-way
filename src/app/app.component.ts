import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environments/environment.ts';

import { TabsComponent } from '../components/tabs/tabs.component';


@Component({
    templateUrl: 'app.component.html',
})
export class AppComponent {

    public rootPage: any = TabsComponent;
    public static API_ENDPOINT = environment.apiEndpoint;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
