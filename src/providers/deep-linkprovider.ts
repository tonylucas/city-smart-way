import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';

export const deepLinkName = 'deepLink';

@Injectable()
export class DeepLinkProvider {
    public deepLink$: Observable<any>;

    constructor() {
        this.initWatchDeepLink();
    }

    initWatchDeepLink() {
        console.log('initWatchDeepLink');

        // var button = document.querySelector('button');

        // this.deepLink$ = Observable.fromEvent(window, "deepLink");
        // this.deepLink$ = Observable.fromEvent(button, 'click');


        // button.addEventListener(deepLinkName, () => console.log('deepLink event'));

        // .merge(new BehaviorSubject("init"))
        // .filter(() => localStorage.getItem(deepLinkName) === null)
        // .map(() => {
        //     let url = localStorage.getItem(deepLinkName);
        //     console.log('Observable map deepLinkName', url);
        //     localStorage.removeItem(deepLinkName);
        //     return url;
        // });

        // this.deepLink$.subscribe(res => console.log("deepLink event", res));
    }
}
