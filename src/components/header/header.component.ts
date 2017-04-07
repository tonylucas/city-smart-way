import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  title:string;

  constructor() {
    this.title = 'City Smart Way';
  }
}
