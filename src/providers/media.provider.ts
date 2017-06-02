import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment.ts';

/*
  Generated class for the Media provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class MediaProvider {

    data: any;

    private mediaUrl = `${environment.apiEndpoint}media/`;


    constructor(public http: Http) {
        this.data = null;
    }

    // Get media from ID
    getMediaById(id) {
        return this.http.get(this.mediaUrl + id)
            .map((res: any) => {
                return JSON.parse(res._body);
            });
    }

}
