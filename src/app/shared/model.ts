export interface Offer {
  title: string,
  img: string,
  price: string,
  paragraphs: string
}

export interface SectionOffer {
  title: string,
  offers: Offer[]
}