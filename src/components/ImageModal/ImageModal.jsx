import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, selectedImage }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img className={css.img} src={selectedImage} alt={selectedImage.alt} />
      </Modal>
    </div>
  );
};
export default ImageModal;
