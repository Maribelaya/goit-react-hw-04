import SearchBar from "./SearchBar";
import ImageModal from "./ImageModal";
import ImageGallery from "./ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { fetchArticles } from "../api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // const handleSearch = async (topic) => {
  //   try {
  //   setArticles([]);
  //   setError(false);
  //     setLoading(true);
  //     const data = await fetchArticlesWithTopic(topic);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSearch = async (query, page) => {
    try {
      setArticles([]);
      setLoading(true);
      setError(false);
      fetchArticles();

      // useEffect(() => {
      //   if (query === "") {
      //     fetchArticles(query);
      //     setPage(1);

      //     return;
      //   }
      // });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {};
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery />
      <ImageModal isOpen={openModal} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </>
  );
};

export default App;
