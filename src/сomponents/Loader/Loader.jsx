import css from "./Loader.module.css";
import { ProgressBar } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={css.loader}>
      <ProgressBar
        visible={true}
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        position
      />
    </div>
  );
};
export default Loader;
