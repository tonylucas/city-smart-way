import { Component, OnInit } from '@angular/core';

let news: Object = {
  title: 'La flamme de l’Alma n’est pas une bougie pour Diana',
  url: 'assets/img/news/flamme-de-alma.jpg',
  paragraphs: [
    'Il y a flamme et flamme. Les guides de City Smart Way adorent raconter des histoires pour captiver leurs groupes. Mais même emportés par leur verve habituelle, ils ne diront jamais que la torche dorée, qui trône place de l’Alma à Paris, est un monument érigé à la mémoire de Lady Diana, décédée tragiquement dans le tunnel passant juste en dessous avec son compagnon Dodi Al Fayed, un triste soir d’août 1997.',
    'Depuis, des dizaines de touristes viennent se recueillir chaque jour devant ce monument. Pourtant, il leur suffirait de lire la plaque pour s’apercevoir de leur erreur : « Flamme de la Liberté. Réplique exacte de la flamme de la statue de la Liberté offerte au peuple français par des donateurs du monde entier en symbole de l’amitié franco-américaine. À l’occasion du centenaire de l’International Herald Tribune. Paris 1887-1987 ».',
    'Cette « flamme » est en effet une réplique exacte de la torche de « Miss Liberty », la statue de la Liberté. Cette réplique a été inaugurée en 1989 pour célébrer l’amitié de la France et des Etats-Unis, en remerciement du chantier de restauration de la statue effectuée trois ans plus tôt par deux entreprises françaises. Le monument lui-même a été financé par une souscription lancée par le célèbre journal américain.',
    'Rapidement tombée dans l’oubli, la flamme dorée de 3,5 de haut a connu une nouvelle renommée 8 ans plus tard. Détournée de sa destination originelle après la mort de Lady Diana, elle est devenue une sorte de « palimpseste social », un monument dont le public a réattribué le sens. Il est vrai qu’Elton John a chanté « A candle in the wind » aux funérailles de la Princesse, contribuant à nourrir cet imaginaire. Depuis le soir de l’accident, des fleurs, des graffitis, des messages sont déposés chaque jour sur la torche. Ils sont tout aussi régulièrement enlevés par les services de la ville de Paris.'
  ]
};

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})

export class FullNewsComponent implements OnInit {

  news: Object;

  constructor() {
    this.news = news;
  }

  ngOnInit() {}
}