import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const baseUrl = 'https://city-smart-way.firebaseio.com';

@Injectable()

export class HttpService {

    constructor(private http: Http) { }

    getData(value: String) {
        return this.http.get(baseUrl + value);
    }
}
