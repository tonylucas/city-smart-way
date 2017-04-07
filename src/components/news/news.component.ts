import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FullNewsComponent } from '../full-news/full-news.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html'
})

export class NewsComponent {

    title: String;
    img: String;

    constructor(public navCtrl: NavController) {
        this.title = 'La flamme de l’Alma n’est pas une bougie pour Diana';
        this.img = 'assets/img/news/flamme-de-alma.jpg';
    }

    redirect() {
        // this.router.navigate(['full-news']);
        this.navCtrl.push(FullNewsComponent);
    }
}
