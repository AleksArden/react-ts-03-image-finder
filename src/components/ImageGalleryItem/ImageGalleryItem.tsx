import { ICurrentImage, ItemImage } from 'type/typeImage';
import css from './ImageGalleryItem.module.css';

interface IProps {
  image: ItemImage,
  onOpenModal: (image: ICurrentImage) => void,

}

export const ImageGalleryItem = ({ 

  image: {tags,largeImageURL,webformatURL },
  onOpenModal,
}: IProps) => {
  
  return (
    <li
      id="gallery"
      className={css.item}
      onClick={() => onOpenModal({ src: largeImageURL, alt: tags })}
    >
      <img className={css.image} src={webformatURL} alt={tags} />
    </li>
  );
};

