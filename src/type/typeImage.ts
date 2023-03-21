export interface IImage {
  webformatURL: string,
  largeImageURL: string,
  tags: string,
  id: string,
}

export interface ICurrentImage {
    src: string,
    alt: string,
}

export type ItemImage = Pick<IImage, 'webformatURL' | 'largeImageURL' | 'tags'>