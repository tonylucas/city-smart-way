import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment.ts';

import { Category } from '../models/category';

/*
  Generated class for the Media provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class CategoryProvider {

    data: any;

    private categoryUrl = `${environment.apiEndpoint}categories/`;


    constructor(public http: Http) {
        this.data = null;
    }

    // Get category from ID
    getCategoryById(id) {
        return this.http.get(this.categoryUrl + id)
            .map((res: any) => {
                return JSON.parse(res._body);
            });
    }

}
