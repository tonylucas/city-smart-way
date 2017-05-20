import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment.ts';

import { Offer } from '../models/offer';

/*
  Generated class for the Products provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class ProductsProvider {

    data: any;

    // private productsUrl = AppComponent.API_ENDPOINT + 'products/';
    // private lastProductsUrl = AppComponent.API_ENDPOINT + '/products/?per_page=5&orderby=date';
    private lastProductsUrl = `${environment.apiEndpoint}products/?per_page=${environment.nbOffersSlidersHome}&orderby=date`;

    constructor(public http: Http) {
        this.data = null;
    }

    // Get all products from the API
    getProducts() {
        // return this.http.get(this.keywordsUrl)
        // .map((res: Response) => res.json());
    }

    // Get 5 last (by date) products from the API
    getLastProducts() {
        return this.http.get(this.lastProductsUrl)
            .map((res: any) => {
                return JSON.parse(res._body);
            });
    }

}
