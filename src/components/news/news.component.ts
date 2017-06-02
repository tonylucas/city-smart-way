import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FullNewsComponent } from '../full-news/full-news.component';
import { PostsProvider } from '../../providers/posts.provider';
import { MediaProvider } from '../../providers/media.provider';
import { CategoryProvider } from '../../providers/category';
import { Post } from '../../models/post';
import { Media } from '../../models/media';
import { Category } from '../../models/category';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html'
})

export class NewsComponent {

    lastPost: Post;

    constructor(
        public navCtrl: NavController,
        private postsProvider: PostsProvider,
        private mediaProvider: MediaProvider,
        private categoryProvider: CategoryProvider) {
    }

    ngOnInit() {
        this.postsProvider.getLastPost().subscribe((response: any) => {
            this.lastPost = response;
            console.log("lastPost", this.lastPost);
            // console.log(this.lastPost);
            // console.log('lastPost', JSON.parse(this.lastPost[0]));

            if (this.lastPost) {
                this.mediaProvider.getMediaById(this.lastPost.featured_media).subscribe((response: Media) => {
                    this.lastPost.featured_media_src = response.media_details.sizes.shop_single.source_url;
                    this.lastPost.featured_media_alt = response.alt_text;
                });
                this.categoryProvider.getCategoryById(this.lastPost.categories[0]).subscribe((response: Category) => {
                    this.lastPost.category = response.name;
                });
            }
        });
    }



    redirect() {
        this.navCtrl.push(FullNewsComponent, {
            lastPost: this.lastPost
        });
    }
}
