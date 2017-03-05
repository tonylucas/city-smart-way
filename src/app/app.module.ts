import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterConfig } from './app.routerConfig';
import { FirebaseConfig } from './app.firebaseConfig';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import { HttpService } from './shared/http.service';

import { AppComponent } from './app.component';
import { YouComponent } from './you/you.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { OfferComponent } from './offer/offer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { FullNewsComponent } from './full-news/full-news.component';
import { NextVisitComponent } from './next-visit/next-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    YouComponent,
    MenuComponent,
    HomeComponent,
    NewsComponent,
    OfferComponent,
    HeaderComponent,
    SliderComponent,
    ContactComponent,
    FullNewsComponent,
    NextVisitComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterConfig,
    SwiperModule,
    FirebaseConfig
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}