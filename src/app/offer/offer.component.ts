import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../shared/http.service';
import { Offer, SectionOffer } from '../shared/model';

const lastOffersUrl: String = '/lastOffers/offers/';
const format: String = '.json';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent implements OnInit {

  id: string;
  offer: Offer;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.httpService.getData(lastOffersUrl + this.id + format).subscribe(response => {
        this.offer = response.json();
      });
    });
  }
}