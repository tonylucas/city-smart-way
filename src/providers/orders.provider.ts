import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment.ts';

/*
  Generated class for the Products provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class OrdersProvider {

    data: any;

    private ordersUrl = `${environment.apiEndpoint}orders/`;

    constructor(public http: Http) {
        this.data = null;
    }

    // Get one order by ID from the API
    getOrder(id) {
        console.log("getOrder : " + id);
        return this.http.get(this.ordersUrl + id);
    }

    // Check order id and name matching
    checkOrder(id, name) {
        return this.getOrder(id)
            .map((res: any) => {
                let data = JSON.parse(res._body),
                    matching = false;

                if (typeof data.id !== 'undefined'
                    && data.status == "completed"
                    && data.billing.last_name.toUpperCase() == name.toUpperCase()) {
                    matching = true;
                }

                return matching;
            });
    }

}
