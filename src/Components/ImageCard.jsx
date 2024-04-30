const ImageCard = ({ article, description, onClick }) => {
  return (
    <div>
      <img src={article} alt={description} onClick={onClick} />
    </div>
  );
};
export default ImageCard;
