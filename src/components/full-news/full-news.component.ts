import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'app-full-news',
    templateUrl: './full-news.component.html'
})

export class FullNewsComponent implements OnInit {

    lastPost: Post;

    constructor(
        public navParams: NavParams
    ) { }

    ngOnInit() {
        this.lastPost = this.navParams.get('lastPost')
    }
}
