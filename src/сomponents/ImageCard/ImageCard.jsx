import css from "./ImageCard.module.css";
const ImageCard = ({ article, description, onClick }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={article}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};
export default ImageCard;
