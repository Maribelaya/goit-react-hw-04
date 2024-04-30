import SearchBar from "./SearchBar/SearchBar";
import ImageModal from "./ImageModal/ImageModal";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { fetchArticles } from "../api";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchArticles(query.split("/")[1], page);
        console.log(fetchedData);
        setArticles((prevArticles) => [
          ...prevArticles,
          ...fetchedData.results,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);
  const openModal = (images) => {
    setSelectedImage(null);
    setModalIsOpen(images);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={searchArticles} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {articles.length > 0 && (
        <ImageGallery items={articles} openModal={openModal} />
      )}
      {articles.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

      <LoadMoreBtn handleLoadMore={handleLoadMore} />
      {selectedImage && (
        <ImageModal
          images={selectedImage}
          modalIsOpen={isOpen}
          closeModal={closeModal}
        />
      )}
      <Toaster position="right-center" />
    </div>
  );
};
export default App;
{
  /* <div>
<SearchBar onSubmit={handleSearch} />
{images.length > 0 && <ImageGallery images={images} onClick={handleImageClick} />}
{hasMoreImages && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
{selectedImage && (
    <ImageModal
        images={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
    />
)}
</div> */
}
