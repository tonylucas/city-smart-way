import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'thumbnail-img',
    template: `
    <img [src]="formatedSrc" [alt]="alt" [class]="class">
  `
})
// <img [src]="offer.images[0].src" [alt]="offer.images[0].alt" class="img-push">

export class ThumbnailImgDirective implements OnInit {

    @Input() src: String;
    @Input() alt: String;
    @Input() class: String;

    public formatedSrc: String;

    ngOnInit() {
        this.formatedSrc = this.src;
        const regex = /[A-Z]{1}\d{13}/i;
        const check = this.src.match(regex);

        // If src contains something like "e1486766256366"
        if (check) {
            let remove = check[0];
            this.formatedSrc = this.formatedSrc.replace(remove, '');
            this.formatedSrc = this.formatedSrc
                .replace('.jpg', '300x300.jpg')
                .replace('.png', '300x300.png');
        } else {
            this.formatedSrc = this.formatedSrc
                .replace('.jpg', '-300x300.jpg')
                .replace('.png', '-300x300.png');
        }

    }
}
