import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Offer, SectionOffer } from '../shared/model';

const lastOffersUrl: String = '/lastOffers.json';
const bestOffersUrl: String = '/bestOffers.json';
const customOffersUrl: String = '/customOffers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  lastOffers: SectionOffer;
  bestOffers: SectionOffer;
  customOffers: SectionOffer;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData(lastOffersUrl).subscribe(response => {
      this.lastOffers = response.json();
    });

    this.httpService.getData(bestOffersUrl).subscribe(response => {
      this.bestOffers = response.json();
    });

    this.httpService.getData(customOffersUrl).subscribe(response => {
      this.customOffers = response.json();
    });
  }
}