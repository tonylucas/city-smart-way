import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Intercom } from '@ionic-native/intercom';

import { FirebaseConfig } from './app.firebaseConfig';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import { HttpService } from '../providers/http.service';
import { ProductsProvider } from '../providers/products.provider';
import { OrdersProvider } from '../providers/orders.provider';
import { PostsProvider } from '../providers/posts.provider';
import { MediaProvider } from '../providers/media.provider';
import { CategoryProvider } from '../providers/category';
import { CartService } from '../providers/cart.service';
import { CartModalService } from '../providers/cart-modal.service';
import { DeepLinkProvider } from '../providers/deep-linkprovider.ts';


import { AppComponent } from './app.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { ProfileComponent } from '../components/profile/profile.component';
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
import { ToolbarComponent } from '../components/toolbar/toolbar';
import { ImportBookingComponent } from '../components/import-booking/import-booking.component';


@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        ProfileComponent,
        HomeComponent,
        NewsComponent,
        OfferComponent,
        HeaderComponent,
        SliderComponent,
        ContactComponent,
        FullNewsComponent,
        NextVisitComponent,
        ThumbnailImgDirective,
        CartModal,
        ToolbarComponent,
        ImportBookingComponent
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
        ProfileComponent,
        TabsComponent,
        CartModal,
        ImportBookingComponent
    ],
    providers: [
        HttpService,
        ProductsProvider,
        OrdersProvider,
        PostsProvider,
        MediaProvider,
        CategoryProvider,
        CartService,
        CartModalService,
        StatusBar,
        SplashScreen,
        Intercom,
        DeepLinkProvider,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
export class AppModule { }
