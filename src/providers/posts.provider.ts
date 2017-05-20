import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment.ts';

import { Offer } from '../models/offer';

/*
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class PostsProvider {

    data: any;

    private lastPostUrl = `${environment.apiEndpoint}posts/?per_page=1&orderby=date`;
    private lastPostsUrl = `${environment.apiEndpoint}posts/?per_page=${environment.nbOffersSlidersHome}&orderby=date`;

    constructor(public http: Http) {
        this.data = null;
    }

    // Get all posts from the API
    getPosts() {
        // return this.http.get(this.keywordsUrl)
        // .map((res: Response) => res.json());
    }

    // Get last (by date) post from the API
    getLastPost() {
        return this.http.get(this.lastPostUrl)
            .map((res: any) => {
                return JSON.parse(res._body);
            });
    }

    // Get 5 last (by date) posts from the API
    getLastPosts() {
        return this.http.get(this.lastPostsUrl)
            .map((res: any) => {
                return JSON.parse(res._body);
            });
    }

}
