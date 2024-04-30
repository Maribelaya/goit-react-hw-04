import ImageCard from "./ImageCard";

const ImageGallery = ({ articles, onClick }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.objectID}>
          <ImageCard article={article} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
