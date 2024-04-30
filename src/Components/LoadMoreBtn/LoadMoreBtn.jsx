import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <>
      <button className={css.load_more} onClick={handleLoadMore}>
        Load More{" "}
      </button>
    </>
  );
};
export default LoadMoreBtn;
