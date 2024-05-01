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
  // const [showBtn, setShowBtn] = useState(false);

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
        setError("");
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const openModal = (selectedImage) => {
    setSelectedImage(selectedImage);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={searchArticles} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {articles.length > 0 && (
        <ImageGallery items={articles} openModal={openModal} />
      )}
      {articles.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage.target.currentSrc}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <Toaster position="right-top" />
    </div>
  );
};
export default App;
