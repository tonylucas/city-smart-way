

export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Description {
    rendered: string;
}

export interface Caption {
    rendered: string;
}

export interface Thumbnail {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Medium {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Large {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface ShopThumbnail {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface ShopCatalog {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface ShopSingle {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface UniCpoThumb {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Full {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Sizes {
    thumbnail: Thumbnail;
    medium: Medium;
    large: Large;
    shop_thumbnail: ShopThumbnail;
    shop_catalog: ShopCatalog;
    shop_single: ShopSingle;
    "uni-cpo-thumb": UniCpoThumb;
    full: Full;
}

export interface ImageMeta {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: any[];
}

export interface MediaDetails {
    width: number;
    height: number;
    file: string;
    sizes: Sizes;
    image_meta: ImageMeta;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    author: Author[];
    replies: Reply[];
}

export interface Media {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Guid;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    author: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    description: Description;
    caption: Caption;
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: MediaDetails;
    post: number;
    source_url: string;
    _links: Links;
}
