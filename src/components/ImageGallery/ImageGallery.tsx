import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { IImage, ICurrentImage } from 'type/typeImage';

import css from './ImageGallery.module.css';

interface IProps {
  images: IImage[],
  onOpenModal: (image: ICurrentImage) => void
}

export const ImageGallery = ({ images, onOpenModal }: IProps) => {
  return (
    <ul className={css.gallery} id="gallery">
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
         
          onOpenModal={onOpenModal}
          image={item}
        />
      ))}
    </ul>
  );
};

