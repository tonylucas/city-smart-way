import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { FirebaseConfig } from './app.firebaseConfig';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import { HttpService } from '../providers/http.service';
import { ProductsProvider } from '../providers/products';
import { PostsProvider } from '../providers/posts.provider';
import { MediaProvider } from '../providers/media.provider';
import { CategoryProvider } from '../providers/category';
import { CartService } from '../providers/cart';


import { AppComponent } from './app.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { YouComponent } from '../components/you/you.component';
import { HomeComponent } from '../components/home/home.component';
import { NewsComponent } from '../components/news/news.component';
import { OfferComponent } from '../components/offer/offer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SliderComponent } from '../components/slider/slider.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FullNewsComponent } from '../components/full-news/full-news.component';
import { NextVisitComponent } from '../components/next-visit/next-visit.component';
import { CartModal } from '../components/modal-cart/modal-cart.component';

import { ThumbnailImgDirective } from '../directives/thumbnail-img';

import {APP_BASE_HREF} from '@angular/common';


@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        YouComponent,
        HomeComponent,
        NewsComponent,
        OfferComponent,
        HeaderComponent,
        SliderComponent,
        ContactComponent,
        FullNewsComponent,
        NextVisitComponent,
        ThumbnailImgDirective,
        CartModal
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(AppComponent, {
            backButtonText: 'Retour',
            tabsPlacement: 'bottom',
            // iconMode: 'ios',
            // modalEnter: 'modal-slide-in',
            // modalLeave: 'modal-slide-out',
            // pageTransition: 'ios-transition'
        }),
        IonicStorageModule.forRoot(),
        FormsModule,
        FirebaseConfig,
        SwiperModule,
        BrowserAnimationsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomeComponent,
        FullNewsComponent,
        OfferComponent,
        ContactComponent,
        NextVisitComponent,
        YouComponent,
        TabsComponent,
        CartModal
    ],
    providers: [
        HttpService,
        ProductsProvider,
        PostsProvider,
        MediaProvider,
        CategoryProvider,
        CartService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
export class AppModule { }
