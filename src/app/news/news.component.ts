import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent {

  title: String;
  img: String;

  constructor(private router: Router) {
    this.title = 'La flamme de l’Alma n’est pas une bougie pour Diana';
    this.img = 'assets/img/news/flamme-de-alma.jpg';
  }

  redirect(){
    this.router.navigate(['full-news']);
  }
}
