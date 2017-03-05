import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouComponent } from './you/you.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { FullNewsComponent } from './full-news/full-news.component';
import { NextVisitComponent } from './next-visit/next-visit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'you', component: YouComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'full-news', component: FullNewsComponent },
  { path: 'next-visit', component: NextVisitComponent },
  { path: 'offer/:id', component: OfferComponent }
];

export const RouterConfig: ModuleWithProviders = RouterModule.forRoot(routes);