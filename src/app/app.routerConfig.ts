import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouComponent } from '../components/you/you.component';
import { HomeComponent } from '../components/home/home.component';
import { OfferComponent } from '../components/offer/offer.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FullNewsComponent } from '../components/full-news/full-news.component';
import { NextVisitComponent } from '../components/next-visit/next-visit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'you', component: YouComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'full-news', component: FullNewsComponent },
    { path: 'next-visit', component: NextVisitComponent },
    { path: 'offer/:id', component: OfferComponent }
];

export const RouterConfig: ModuleWithProviders = RouterModule.forRoot(routes);
