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

const ImageModal = ({ closeModal }) => {
  return (
    <div>
      <Modal style={customStyles}>
        <button onClick={() => closeModal()}>close</button>
      </Modal>
    </div>
  );
};
export default ImageModal;
