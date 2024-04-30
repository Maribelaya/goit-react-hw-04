import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.imageCard}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard article={item.urls.small} onClick={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
