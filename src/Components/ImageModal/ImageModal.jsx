import Modal from "react-modal";
Modal.setAppElement("#root");

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
      <Modal isOpen={modalIsOpen} closeModal={closeModal} style={customStyles}>
        <img src={selectedImage} alt="" />
      </Modal>
    </div>
  );
};
export default ImageModal;
