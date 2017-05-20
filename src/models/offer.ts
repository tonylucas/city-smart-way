export interface Dimensions {
    length: string;
    width: string;
    height: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Image {
    id: number;
    date_created: Date;
    date_modified: Date;
    src: string;
    name: string;
    alt: string;
    position: number;
}

export interface Attribute {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
}

export interface DefaultAttribute {
    id: number;
    name: string;
    option: string;
}

export interface Dimensions2 {
    length: string;
    width: string;
    height: string;
}

export interface Image2 {
    id: number;
    date_created: Date;
    date_modified: Date;
    src: string;
    name: string;
    alt: string;
    position: number;
}

export interface Attribute2 {
    id: number;
    name: string;
    option: string;
}

export interface Variation {
    id: number;
    date_created: Date;
    date_modified: Date;
    permalink: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string;
    date_on_sale_to: string;
    on_sale: boolean;
    purchasable: boolean;
    visible: boolean;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    in_stock: boolean;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    weight: string;
    dimensions: Dimensions2;
    shipping_class: string;
    shipping_class_id: number;
    image: Image2[];
    attributes: Attribute2[];
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
}

export interface Offer {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: Date;
    date_modified: Date;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string;
    date_on_sale_to: string;
    price_html: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    download_type: string;
    external_url: string;
    button_text: string;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity?: any;
    in_stock: boolean;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    dimensions: Dimensions;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    related_ids: number[];
    upsell_ids: number[];
    cross_sell_ids: any[];
    parent_id: number;
    purchase_note: string;
    categories: Category[];
    tags: Tag[];
    images: Image[];
    attributes: Attribute[];
    default_attributes: DefaultAttribute[];
    variations: Variation[];
    grouped_products: any[];
    menu_order: number;
    _links: Links;
}
