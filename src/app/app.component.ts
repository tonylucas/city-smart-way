import { Component, ViewChild, Renderer2 } from '@angular/core';

import { Platform, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { environment } from '../environments/environment.ts';

import { TabsComponent } from '../components/tabs/tabs.component';
import { NextVisitComponent } from '../components/next-visit/next-visit.component';
import { DeepLinkProvider } from '../providers/deep-linkprovider';

export const deepLinkName = 'deepLink';

@Component({
    templateUrl: 'app.component.html',
})
export class AppComponent {
    @ViewChild('myNav') nav: NavController

    public rootPage: any = TabsComponent;
    public static API_ENDPOINT = environment.apiEndpoint;
    public local: Storage;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        public storage: Storage,
        public renderer: Renderer2,
        public deepLinkProvider: DeepLinkProvider
    ) {


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            this.watchDeepLink();
        });
    }


    watchDeepLink() {
        document.addEventListener(deepLinkName, (e) => {
            this.nav.push(NextVisitComponent);
            let link = localStorage.getItem("deepLink");
            let params = this.parseUrl(link);
            localStorage.setItem("orderId", params.order_id);
            this.nav.push(NextVisitComponent);
        }, false);
    }

    parseUrl(url: string): any {
        url = url.replace(/^((?:.*)\?)/, '');
        let result = {};
        url.split("&").forEach(part => {
            let item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    // Wait for the components in MyApp's template to be initialized
    // In this case, we are waiting for the Nav with reference variable of "#myNav"
    // ngOnInit() {
    //     console.log('ngOnInit');
    //     let global = this.renderer.listen('document', 'LaunchFromUrl', (evt) => {
    //         console.log('LaunchFromUrl Event triggered !', evt);
    //         this.nav.push(NextVisitComponent);
    //     });
    //     global();


    // console.log(this.nav);
    // let test = this.nav.push(NextVisitComponent);
    // console.log(test);

    // this.storage.ready().then(() => {
    //     this.storage.get('external_load').then((val) => {
    //         if (val) {
    //             console.log("external_load detected", val);
    //             this.nav.push(NextVisitComponent, {
    //                 orderId: val
    //             });
    //         }
    //     });
    // });
    // }
}
